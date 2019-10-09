import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/core/api/login.service';
import { UserService } from 'src/app/core/api/user.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { LanguageService } from 'src/app/core/language/language.service';
import { SnackbarService } from 'src/app/core/logging/snackbar.service';
import { AsyncacheService } from 'src/app/core/storage/asyncache.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-sso',
    templateUrl: './sso.component.html',
    styleUrls: ['./sso.component.scss']
})
export class SsoComponent implements OnInit {
    public language = this.languageService.selectedLanguage ? this.languageService.selectedLanguage : this.languageService.english;
    public originString = 'the login page';
    public userDisabled = false;

    // Two FA variables
    public formTwoFA: FormGroup;
    public loadingTwoFA = false;
    public twoFactorStep = false;

    constructor(
        public languageService: LanguageService,
        public authService: AuthenticationService,
        public route: ActivatedRoute,
        public asyncacheService: AsyncacheService,
        public userService: UserService,
        public loginService: LoginService,
        private router: Router,
        public snackbar: SnackbarService,
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(result => {
            const origin = result['origin'];

            switch (origin) {
                case 'hid':
                    this.loginHID(result['code']);
                    this.originString = 'Humanitarian ID';
                    break;
                case 'google':
                    this.loginGoogle(result['token']);
                    this.originString = 'Google';
                    break;
                case 'linkedin':
                    if (result['error_description']) {
                        this.snackbar.error(result['error_description']);
                    } else {
                        this.loginLinkedIn(result['code']);
                        this.originString = 'LinkedIn';
                    }
                    break;
                default:
                    if (this.loginService.getTwoFactorStep()) {
                        this.makeForm();
                        this.twoFactorStep = true;
                    } else {
                        this.userDisabled = true;
                    }
                    break;
            }
        });
    }

    loginHID(code: string) {
        if (code) {
            this.authService.loginHumanID(code).subscribe((userFromApi: any) => {
                this.login(userFromApi);
            }, (_error) => {
                this.router.navigateByUrl('/login');
            });
        }
    }

    loginGoogle(token: string) {
        this.authService.loginGoogle(token).subscribe((userFromApi: any) => {
           this.login(userFromApi);
        }, (_error) => {
            this.router.navigateByUrl('/login');
        });
    }

    loginLinkedIn(code: string) {
        this.authService.loginLinkedIn(code).subscribe((userFromApi: any) => {
        }, (_error) => {
            this.router.navigateByUrl('/login');
        });
    }

    login(userFromApi) {
        const user = User.apiToModel(userFromApi);
        if (user && !user.get('rights')) {
            this.userDisabled = true;
        } else {
            if (user.get('twoFactorAuthentication')) {
                this.loginService.sendCode(userFromApi);
                this.twoFactorStep = true;
            } else {
                this.userService.setCurrentUser(user);
                this.asyncacheService.setUser(userFromApi).subscribe((_: any) => {
                    this.loginService.clearSessionCacheEntries();
                    this.loginService.loginRoutine(user).subscribe(() => {
                        this.router.navigateByUrl('/');
                    });
                });
            }
        }
    }

    public makeForm() {
        this.formTwoFA = new FormGroup({
            twoFactorCode: new FormControl('', [Validators.required]),
        });
    }

    public onSubmitTwoFA(): void {
        const { twoFactorCode } = this.formTwoFA.value;
        this.loadingTwoFA = true;
        this.loginService.authenticateCode(Number(twoFactorCode)).subscribe((_success) => {
            this.loadingTwoFA = false;
            if (_success) {
                this.twoFactorStep = false;
                this.router.navigateByUrl('/');
            } else {
                this.snackbar.error(this.language.login_two_fa_invalid_code);
            }
        });
    }
}

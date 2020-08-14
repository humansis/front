import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { LanguageService } from 'src/app/core/language/language.service';
import { UserService } from 'src/app/core/api/user.service';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss'],
})
export class GeneralSettingsComponent implements OnInit {
  public nameComponent = 'general-settings';

  selectedTitle = '';

  // Language
  public language = this.languageService.selectedLanguage
    ? this.languageService.selectedLanguage
    : this.languageService.english;

  @ViewChild(SettingsComponent, { static: true }) settings: SettingsComponent;

  constructor(
    public languageService: LanguageService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.selectedTitle = this.route.snapshot.firstChild
      ? this.route.snapshot.firstChild.params.title ||
        this.route.snapshot.firstChild.data.title
      : undefined;
    this.router.events
      .pipe(filter((event) => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) => {
        const title = event.snapshot.data.title || event.snapshot.params.title;
        if (title) {
          this.selectedTitle = title;
        }
      });
  }
}

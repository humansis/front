import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DisplayType } from 'src/app/models/constants/screen-sizes';
import { environment } from 'src/environments/environment';
import { UserService } from './core/api/user.service';
import { CountriesService } from './core/countries/countries.service';
import { Language } from './core/language/language';
import { LanguageService } from './core/language/language.service';
import { ScreenSizeService } from './core/screen-size/screen-size.service';
import { UpdateService } from './core/service-worker/update.service';
import { gitInfo } from 'src/app/version';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { svgIcons } from 'src/app/svg-mat-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public extendedSideNav = false;

  // Screen size
  public currentDisplayType: DisplayType;
  public viewReady = false;
  public appVersion = gitInfo.appVersion;

  // Subscriptions
  subscriptions: Array<Subscription>;

  constructor(
    public router: Router,
    public dialog: MatDialog,
    public userService: UserService,
    public languageService: LanguageService,
    private screenSizeService: ScreenSizeService,
    private updateService: UpdateService,
    private countriesService: CountriesService,
    private renderer: Renderer2,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    svgIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/' + icon.path)
      );
    });
  }

  ngOnInit() {
    this.subscriptions = [
      this.screenSizeService.displayTypeSource.subscribe((displayType: DisplayType) => {
        this.currentDisplayType = displayType;
        this.handleChat();
      }),
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.handleChat();
          this.viewReady = true;
        }
      }),
      this.updateService.checkForUpdates().subscribe(),
    ];
    this.languageService.selectedLanguage$.subscribe((language: Language) => {
      if (language) {
        this.renderer.addClass(document.body, language.LANGUAGE_ISO);
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  closeSideNav() {
    if (this.extendedSideNav) {
      this.extendedSideNav = false;
    }
  }

  matchUrl(): string {
    const match = this.router.url.split('/');
    match.shift();
    return match[0];
  }

  public headerIsReady() {
    const { selectableCountries, selectedCountry } = this.countriesService;
    return (
      selectableCountries.length &&
      selectedCountry &&
      this.userService.currentUser &&
      this.getLanguage()
    );
  }

  // Chat should only be shown in prod, on the dashboard page and in desktop mode
  public chatShouldBeDisplayed(): boolean {
    return (
      environment.production &&
      this.router.url === '/' &&
      this.currentDisplayType.type !== 'mobile'
    );
  }

  private handleChat(): void {
    const chat = document.getElementById('chat-widget-container');
    if (chat) {
      if (!this.chatShouldBeDisplayed()) {
        chat.style.display = 'none';
        return;
      }
      chat.style.display = 'block';
    }
  }

  public getLanguage(): Language {
    return this.languageService.selectedLanguage;
  }
}

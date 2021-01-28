import { Injectable } from '@angular/core';
import { Country } from 'src/app/models/country';
import { Language } from './language';
import { Arabic } from './translations/language-arabic';
import { English } from './translations/language-english';
import { Russian } from './translations/language-russian';
import { Observable, Subject } from 'rxjs';
import { Amrahic } from 'src/app/core/language/translations/language-amrahic';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  //
  // ─── VARIABLES ──────────────────────────────────────────────────────────────────
  //
  public english = new English();
  public arabic = new Arabic();
  public russian = new Russian();
  public amrahic = new Amrahic();

  private selectedLanguageSource: Subject<Language> = new Subject();
  public selectedLanguage$: Observable<
    Language
  > = this.selectedLanguageSource.asObservable();

  public readonly enabledLanguages: Array<Language> = [
    this.english,
    this.arabic,
    this.russian,
    this.amrahic,
  ];

  // This default value's reference is not contained in enabledLanguages.
  private _selectedLanguage: Language = undefined;
  get selectedLanguage() {
    return this._selectedLanguage || this.english;
  }
  set selectedLanguage(language: Language) {
    this._selectedLanguage = language;
    this.selectedLanguageSource.next(language);
    this.setMargins();
  }
  //
  // ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────────
  //
  public clearLanguage(): Language {
    this.selectedLanguage = undefined;
    return this.selectedLanguage;
  }

  //
  // ─── TYPE CONVERSION ────────────────────────────────────────────────────────────
  //
  // TODO: do not use language as string anymore
  public stringToLanguage(language: string): Language {
    switch (language) {
      case this.arabic.LANGUAGE_ISO:
        return this.arabic;
      case this.english.LANGUAGE_ISO:
        return this.english;
      case this.russian.LANGUAGE_ISO:
        return this.russian;
      case this.amrahic.LANGUAGE_ISO:
        return this.amrahic;
      case 'fr':
        return null;
      default:
        return this.english;
    }
  }

  public languageToString(language: Language): string {
    switch (language) {
      case this.arabic:
        return this.arabic.LANGUAGE_ISO;
      case this.english:
        return this.english.LANGUAGE_ISO;
      case this.russian:
        return this.russian.LANGUAGE_ISO;
      case this.amrahic:
        return this.amrahic.LANGUAGE_ISO;
      case null:
        return 'fr';
      default:
        return this.english.LANGUAGE_ISO;
    }
  }
  //
  // ─── MISC ───────────────────────────────────────────────────────────────────────
  //
  public countryToDefaultLanguage(country: Country): Language {
    switch (country.get<string>('id')) {
      case 'SYR':
        return this.arabic;
      case 'UKR':
        return this.russian;
      case 'ETH':
        return this.amrahic;
      case 'MNG':
      case 'ARM':
      case 'KHM':
      default:
        return this.english;
    }
  }

  public setMargins() {
    const element = document.getElementsByTagName(
      'mat-sidenav-content'
    ) as HTMLCollectionOf<HTMLElement>;
    if (this.selectedLanguage === this.arabic) {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      element[0].style.margin = '0px 64px 0px 0px';
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', '');
      element[0].style.margin = '0px 0px 0px 64px';
    }
  }
}

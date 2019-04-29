import { Injectable } from '@angular/core';
import { Country } from 'src/app/model/country';
import { Language } from './language';
import { Arabic } from './language-arabic';
import { English } from './language-english';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
//
// ─── VARIABLES ──────────────────────────────────────────────────────────────────
//
    public english = new English();
    public arabic = new Arabic();

    public readonly enabledLanguages: Array<Language> = [ this.english, this.arabic ];

    // This default value's reference is not contained in enabledLanguages.
    public selectedLanguage: Language = new English();
    languageSubject = new BehaviorSubject<Language>(this.selectedLanguage);
//
// ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────────
//
    public clearLanguage(): Language {
        this.selectedLanguage = undefined;
        this.languageSubject.next(this.selectedLanguage);
        return this.selectedLanguage;
    }

    public setLanguage(language: Language): Language {
        this.selectedLanguage = language;
        this.languageSubject.next(this.selectedLanguage);
        return this.selectedLanguage;
    }
//
// ─── TYPE CONVERSION ────────────────────────────────────────────────────────────
//
    // TODO: do not use language as string anymore
    public stringToLanguage(language: string): Language {
        switch (language) {
            case 'ar':
                return this.arabic;
            case 'en':
                return this.english;
            case 'fr':
                return null;
        }
    }

    public languageToString(language: Language): string {
        switch (language) {
            case this.arabic:
                return 'ar';
            case this.english:
                return 'en';
            case null:
                return 'fr';
        }
    }
//
// ─── MISC ───────────────────────────────────────────────────────────────────────
//
    public countryToDefaultLanguage(country: Country): Language {
        switch (country.get<string>('id')) {
            case 'SYR':
                return this.arabic;
            case 'KHM':
            default:
                return this.english;
        }
    }


}

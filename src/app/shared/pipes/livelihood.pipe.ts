import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { Language } from 'src/app/core/language/language';
import { LIVELIHOOD } from 'src/app/models/constants/livelihood';

@Pipe({
  name: 'livelihood',
})
export class LivelihoodPipe implements PipeTransform {
  private language: Language = this.languageService.selectedLanguage;

  constructor(private languageService: LanguageService) {}

  transform(id: number, ...args: unknown[]): unknown {
    const livelihood = LIVELIHOOD.find((item) => item.id === `${id}`);
    if (livelihood) {
      return this.language[livelihood.language_key];
    } else {
      return this.language.missingTranslation;
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { Language } from 'src/app/core/language/language';
import { LivelihoodService } from '../../core/api/livelihood.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Pipe({
  name: 'livelihood',
})
export class LivelihoodPipe implements PipeTransform {
  private language: Language = this.languageService.selectedLanguage;

  constructor(
    private languageService: LanguageService,
    private livelihoodService: LivelihoodService
  ) {}

  transform(
    id: number,
    observable: Observable<any> = this.livelihoodService.get().pipe(
      map((livelihoods: { value: string }[]) => {
        const livelihood = livelihoods.find((item) => item.value === `${id}`);
        if (livelihood) {
          return (
            this.language['livelihood_' + livelihood.value] ||
            this.language.missingTranslation
          );
        } else {
          return this.language.missingTranslation;
        }
      })
    ),
    ...args: unknown[]
  ): Observable<string> {
    return observable;
  }
}

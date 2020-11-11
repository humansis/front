import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { Donor } from '../../models/donor';
import { CustomModelService } from '../utils/custom-model.service';
import { HttpService } from '../network/http.service';

@Injectable({
  providedIn: 'root',
})
export class LivelihoodService extends CustomModelService {
  customModelPath = 'livelihoods';

  constructor(protected http: HttpService, protected languageService: LanguageService) {
    super(http, languageService);
  }
}

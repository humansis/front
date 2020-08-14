import { Injectable } from '@angular/core';
import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class CountrySpecificMockService extends CustomModelMockService {
  constructor() {
    super();
  }
}

import { Injectable } from '@angular/core';

import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class ProductMockService extends CustomModelMockService {
  constructor() {
    super();
  }
}

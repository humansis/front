import { Injectable } from '@angular/core';
import { Vendor } from 'src/app/models/vendor';
import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class VendorsMockService extends CustomModelMockService {
  constructor() {
    super();
  }

  public getOne(id: number) {}

  public print(vendor: Vendor) {}
}

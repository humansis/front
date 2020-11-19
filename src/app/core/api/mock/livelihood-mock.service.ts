import { Injectable } from '@angular/core';
import { HouseholdFilters } from 'src/app/models/data-sources/households-data-source';
import { Household } from '../../../models/household';
import { Observable, of } from 'rxjs';
import { DataChange } from 'src/app/models/api/data-change';
import { IHousehold } from 'src/app/models/api/household';
import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class LivelihoodMockService extends CustomModelMockService {
  constructor() {
    super();
  }
}

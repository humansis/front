import { Injectable } from '@angular/core';
import { CustomModelMockService } from './custom-model-mock.service';
import { Observable, of } from 'rxjs';
import { Distribution as ApiDistribution } from 'src/app/models/api/distribution';

@Injectable({
  providedIn: 'root',
})
export class TransactionMockService {
  public getHouseholdPurchases(id: number) {
    return of();
  }
}

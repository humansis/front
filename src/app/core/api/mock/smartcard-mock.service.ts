import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountValue } from 'src/app/models/api/count-value';
import { PurchasesToRedeem } from 'src/app/models/api/purchases-to-redeem';
import { RedeemedBatch } from 'src/app/models/api/redeemed-batch';
import { PurchaseInfo } from '../../../models/api/purchase-info';

@Injectable({
  providedIn: 'root',
})
export class SmartcardMockService {
  public getVendorPurchases(id: string): Observable<CountValue> {
    return of({} as CountValue);
  }

  public getVendorBatch(
    vendorId: string,
    batchId: string,
    observable: Observable<any[]> = of([])
  ): Observable<PurchaseInfo[]> {
    return observable;
  }

  public getVendorBatchExport(batchId: string) {
    return of(undefined);
  }

  public getVendorPurchasesToRedeem(id: string): Observable<PurchasesToRedeem> {
    return of({} as PurchasesToRedeem);
  }

  public getVendorRedeemedBatches(id: string): Observable<RedeemedBatch[]> {
    return of([]);
  }

  public redeemBatch(id: string, batch: number[]): Observable<undefined> {
    return of(undefined);
  }
}

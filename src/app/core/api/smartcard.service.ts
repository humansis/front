import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/network/http.service';
import { Institution } from 'src/app/models/api/institution';
import { URL_BMS_API } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { CountValue } from 'src/app/models/api/count-value';
import { PurchasesToRedeem } from 'src/app/models/api/purchases-to-redeem';
import { RedeemedBatch } from 'src/app/models/api/redeemed-batch';
import { PurchaseInfo } from '../../models/api/purchase-info';
import { tap } from 'rxjs/operators';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class SmartcardService {
  readonly api = URL_BMS_API + '/smartcards';
  constructor(private http: HttpService) {}

  public getVendorPurchases(id: string): Observable<CountValue> {
    const url = `${this.api}/purchases/${id}`;
    return this.http.get(url);
  }

  public getVendorBatchPurchases(batchId: string): Observable<PurchaseInfo[]> {
    const url = `${this.api}/batch/${batchId}/purchases`;
    return this.http.get(url);
  }

  public getVendorBatch(batchId: string): Observable<any> {
    const url = `${this.api}/batch/${batchId}`;
    return this.http.get(url);
  }

  public getVendorBatchExport(batchId: string) {
    const url = `${this.api}/batch/${batchId}/export`;
    const options = {
      responseType: 'blob',
    };
    return this.http.get(url, options);
  }

  public getVendorPurchasesToRedeem(id: string): Observable<PurchasesToRedeem[]> {
    const url = `${this.api}/purchases/to-redemption/${id}`;
    return this.http.get(url);
  }

  public getVendorRedeemedBatches(id: string): Observable<RedeemedBatch[]> {
    const url = `${this.api}/batch`;
    const options = {
      params: {
        vendor: id,
      },
    };
    return this.http.get(url, options);
  }

  public redeemBatch(id: string, batch: number[]): Observable<{ id: number }> {
    const url = `${this.api}/purchases/redeem-batch/${id}`;
    return this.http.post(url, { purchases: batch });
  }
}

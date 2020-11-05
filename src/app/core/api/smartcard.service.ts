import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/network/http.service';
import { Institution } from 'src/app/models/api/institution';
import { URL_BMS_API } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { CountValue } from 'src/app/models/api/count-value';
import { PurchasesToRedeem } from 'src/app/models/api/purchases-to-redeem';
import { RedeemedBatch } from 'src/app/models/api/redeemed-batch';

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

  public getVendorPurchasesToRedeem(id: string): Observable<PurchasesToRedeem> {
    const url = `${this.api}/purchases/to-redemption/${id}`;
    return this.http.get(url);
  }

  public getVendorRedeemedBatches(id: string): Observable<RedeemedBatch[]> {
    const url = `${this.api}/purchases/redeemed-batches/${id}`;
    return this.http.get(url);
  }

  public redeemBatch(id: string, batch: number[]): Observable<undefined> {
    const url = `${this.api}/purchases/redeem-batch/${id}`;
    return this.http.post(url, { purchases: batch });
  }
}

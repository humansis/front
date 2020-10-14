import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/network/http.service';
import { Institution } from 'src/app/models/api/institution';
import { URL_BMS_API } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  readonly api = URL_BMS_API + '/transactions';
  constructor(private http: HttpService) {}

  public getHouseholdPurchases(id: number) {
    const url = `${this.api}/purchases/household/${id}`;
    return this.http.get(url);
    /**
    return of([
      {
        usedAt: '2020-09-23T09:32:49+00:00',
        productId: 13,
        productName: 'soap',
        unit: 'Unit',
        value: '11513000.00',
        quantity: '62000.00',
        source: 'QRvoucher',
      },
      {
        usedAt: '2020-09-23T09:32:49+00:00',
        productId: 13,
        productName: 'soap',
        unit: 'Unit',
        value: '11513000.00',
        quantity: '62000.00',
        source: 'QRvoucher',
      },
      {
        usedAt: '2020-09-23T09:32:49+00:00',
        productId: 13,
        productName: 'soap',
        unit: 'Unit',
        value: '11513000.00',
        quantity: '62000.00',
        source: 'QRvoucher',
      },
    ]);
     */
  }
}

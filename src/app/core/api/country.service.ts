import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/network/http.service';
import { URL_BMS_API } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CountryData } from 'src/app/models/api/country-data';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  readonly api = URL_BMS_API + '/countries';
  constructor(private http: HttpService) {}

  public getOne(iso: string): Observable<CountryData> {
    const url = `${this.api}/${iso}`;
    return this.http.get(url);
  }
}

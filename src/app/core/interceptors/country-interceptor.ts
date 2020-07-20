import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_BMS_API } from 'src/environments/environment';
import { CountriesService } from '../countries/countries.service';

@Injectable()
export class CountryInterceptor implements HttpInterceptor {
  constructor(private countriesService: CountriesService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.match(URL_BMS_API) && this.countriesService.selectedCountry) {
      const request = req.headers.has('country')
        ? req
        : req.clone({
            headers: req.headers.set(
              'country',
              this.countriesService.selectedCountry.get<string>('id')
            ),
          });
      return next.handle(request);
    }
    return next.handle(req);
  }
}

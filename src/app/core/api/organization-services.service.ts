import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { HttpService } from '../network/http.service';
import { CustomModelService } from '../utils/custom-model.service';
import { ExportService } from './export.service';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { WsseService } from '../authentication/wsse.service';
import { HttpHeaders } from '@angular/common/http';
import { CountriesService } from 'src/app/core/countries/countries.service';

@Injectable({
  providedIn: 'root',
})
export class OrganizationServicesService extends CustomModelService {
  customModelPath = 'organization_services';

  constructor(
    protected http: HttpService,
    protected languageService: LanguageService,
    public exportService: ExportService,
    protected wsseService: WsseService,
    private countriesService: CountriesService
  ) {
    super(http, languageService);
  }

  public getServiceStatus(serviceId: string): Observable<boolean> {
    return this.get().pipe(
      switchMap((organizationServices: any) => {
        if (organizationServices) {
          for (const orgService of organizationServices) {
            if (orgService.service.parameters.$id === serviceId) {
              return of(orgService.enabled);
            }
          }
          return of(false);
        } else {
          return of(false);
        }
      })
    );
  }

  public get2FAToken(userFromApi) {
    const url = this.apiBase + '/organization/1/service';
    let userCountry;
    if (userFromApi.countries.length > 0) {
      userCountry = userFromApi.countries[0].iso3;
    } else if (userFromApi.projects.length > 0) {
      userCountry = userFromApi.projects[0].project.iso3;
    } else {
      userCountry = 'KHM';
      console.warn(
        'Cannot find user countries nor projects. Setup KHM as default country'
      );
    }
    return this.wsseService.getHeaderValue(userFromApi).pipe(
      switchMap((headerValue: string) => {
        this.countriesService.selectedCountry = this.countriesService.stringToCountry(
          userCountry
        );
        const options = {
          headers: new HttpHeaders({
            'x-wsse': headerValue,
            country: userCountry,
          }),
        };

        return this.http.get(url, options).pipe(
          switchMap((organizationServices: any) => {
            if (organizationServices) {
              for (const orgService of organizationServices) {
                if (orgService.service.parameters.$id === '2fa' && orgService.enabled) {
                  return of(orgService.parameters_value.token);
                }
              }
              return of(null);
            } else {
              return of(null);
            }
          })
        );
      })
    );
  }

  public get() {
    const url = this.apiBase + '/organization/1/service';
    return this.http.get(url);
  }

  public update(organizationServiceId: number, body: any) {
    const url = this.apiBase + '/organization/service/' + organizationServiceId;
    return this.http.post(url, body);
  }
}

import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Commodity } from 'src/app/models/commodity';
import { Distribution } from 'src/app/models/distribution';
import { DistributionBeneficiary } from 'src/app/models/distribution-beneficiary';
import { UppercaseFirstPipe } from 'src/app/shared/pipes/uppercase-first.pipe';
import { CountriesService } from '../countries/countries.service';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root',
})
export class DistributionMarkerService {
  datePipe = new DatePipe('en-US');

  constructor(
    public countryService: CountriesService,
    public languageService: LanguageService
  ) {}

  public getClassesNames(distribution: Distribution) {
    return this.getDistributionStatus(distribution);
  }

  private getDistributionStatus(distribution: Distribution) {
    if (!distribution.get<boolean>('validated')) {
      return 'not-validated';
    }
    if (distribution.get<boolean>('finished')) {
      return 'completed';
    }
    return 'validated';
  }

  public isToday(distribution: Distribution) {
    const today = new Date();
    const distributionDate = distribution.get<Date>('date');
    today.setHours(0, 0, 0, 0);
    distributionDate.setHours(0, 0, 0, 0);
    return distributionDate.getTime() === today.getTime();
  }

  public getImage(distribution: Distribution) {
    return distribution.get<Array<Commodity>>('commodities')[0].getImage();
  }

  public getPopup(distribution: Distribution) {
    const popup = Leaflet.DomUtil.create('div', 'infoWindow');
    const countryId = this.countryService.selectedCountry.get<string>('id')
      ? this.countryService.selectedCountry.get<string>('id')
      : this.countryService.khm.get<string>('id');
    const language = this.languageService.selectedLanguage
      ? this.languageService.selectedLanguage
      : this.languageService.english;
    const titlePipe = new UppercaseFirstPipe();

    const adms = [
      {
        title: titlePipe.transform(language.adm4[countryId]),
        location: distribution.get(['location', 'adm4', 'name']),
      },
      {
        title: titlePipe.transform(language.adm3[countryId]),
        location: distribution.get(['location', 'adm3', 'name']),
      },
      {
        title: titlePipe.transform(language.adm2[countryId]),
        location: distribution.get(['location', 'adm2', 'name']),
      },
      {
        title: titlePipe.transform(language.adm1[countryId]),
        location: distribution.get(['location', 'adm1', 'name']),
      },
    ];

    popup.innerHTML = `
            <div id="bms-popup">
                ${this.displayLowestLevelOfAdm(adms)}
                ${this.formatPropertyIfExists(
                  titlePipe.transform(language.name),
                  distribution.get(['location', 'adm4', 'name'])
                )}
                ${this.formatPropertyIfExists(
                  titlePipe.transform(language.beneficiary_count),
                  distribution.get('beneficiariesCount')
                )}
                ${this.formatPropertyIfExists(
                  titlePipe.transform(language.name),
                  distribution.get('name')
                )}
                ${this.formatPropertyIfExists(
                  titlePipe.transform(language.commodity_modality),
                  distribution
                    .get<Array<Commodity>>('commodities')
                    .map((commodity: Commodity) =>
                      commodity.get<string>(['modalityType', 'name'])
                    )
                    .reduce(
                      (previousValue: string, currentValue: string) =>
                        `${previousValue}, ${currentValue}`
                    )
                )}
                ${this.formatPropertyIfExists(
                  titlePipe.transform(language.date),
                  this.datePipe.transform(distribution.get<Date>('date'), 'dd-MM-yyyy')
                )}
            </div>
        `;
    return popup;
  }

  private displayLowestLevelOfAdm(adms) {
    const lowestAdm = adms.find((adm) => adm.location);
    return this.formatPropertyIfExists(lowestAdm.title, lowestAdm.location);
  }

  private formatPropertyIfExists(name: string, property: string) {
    return property ? `<p>${name}: ${property}</p>` : '';
  }

  public generateMarker(blink: boolean) {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280" >
            <circle class="marker-pointer" cx="100" cy="100" r="85" stroke="none"/>
            <path class="marker-pointer" d="M 100 280 L 13 150 Q 100 249 186 150 Z" stroke="none"/>
            ${
              blink
                ? '<animate attributeType="CSS" attributeName="opacity"\
            values="1;0.5;1" dur="1s" repeatCount="indefinite" />'
                : ''
            }
        </svg>
        `;
  }
}

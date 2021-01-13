import { Injectable } from '@angular/core';
import { Country } from 'src/app/models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  //
  // ─── VARIABLES ──────────────────────────────────────────────────────────────────
  //
  public khm = new Country('KHM', 'Cambodia');
  public syr = new Country('SYR', 'Syria');
  public ukr = new Country('UKR', 'Ukraine');
  public eth = new Country('ETH', 'Ethiopia');
  public mng = new Country('MNG', 'Mongolia');

  constructor() {}

  private _selectedCountry: Country = this.khm;

  get selectedCountry(): Country {
    return this._selectedCountry;
  }
  set selectedCountry(country: Country) {
    this._selectedCountry = country;
  }

  private _selectableCountries: Array<Country> = [];
  get selectableCountries(): Array<Country> {
    return this._selectableCountries;
  }
  set selectableCountries(countries: Array<Country>) {
    this._selectableCountries = countries;
  }

  public readonly enabledCountries: Array<Country> = [
    this.khm,
    this.syr,
    this.ukr,
    this.eth,
    this.mng,
  ];

  //
  // ─── SELECTABLE COUNTRIES ───────────────────────────────────────────────────────
  //
  public fillWithAllExistingCountries() {
    this.selectableCountries = this.enabledCountries;
  }

  public fillWithCountries(countries: Array<Country>) {
    this.selectableCountries = this.enabledCountries.filter((enabledCountry: Country) => {
      return countries.filter((userCountry: Country) => {
        if (enabledCountry.get<string>('id') === userCountry.get<string>('id')) {
          return enabledCountry;
        }
      })[0];
    });
  }

  //
  // ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────────
  //
  public clearCountries(): void {
    this.selectedCountry = undefined;
    this.selectableCountries = [];
  }

  //
  // ─── CONVERSION ─────────────────────────────────────────────────────────────────
  //
  public stringToCountry(country: string): Country {
    switch (country) {
      case 'KHM':
        return this.khm;
      case 'SYR':
        return this.syr;
      case 'UKR':
        return this.ukr;
      case 'ETH':
        return this.eth;
      case 'MNG':
        return this.mng;
    }
  }

  public countryToString(country: Country): string {
    switch (country) {
      case this.khm:
        return 'KHM';
      case this.syr:
        return 'SYR';
      case this.ukr:
        return 'UKR';
      case this.eth:
        return 'ETH';
      case this.mng:
        return 'MNG';
    }
  }
}

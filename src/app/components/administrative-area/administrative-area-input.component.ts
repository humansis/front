import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CountriesService } from 'src/app/core/countries/countries.service';
import { LanguageService } from 'src/app/core/language/language.service';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/core/api/location.service';
import { AreaLocation } from 'src/app/models/api/area-location';
import { forkJoin, ReplaySubject, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-administrative-area',
  templateUrl: './administrative-area-input.component.html',
  styleUrls: ['./administrative-area-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdministrativeAreaInputComponent),
      multi: true,
    },
  ],
})
export class AdministrativeAreaInputComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;

  @Input()
  public countryIso = 'KHM';

  location: Location;
  administrativeArea1Locations: { [index: string]: AreaLocation[] } = {};
  private area1loadingSource = new ReplaySubject();
  private area2loadingSource = new ReplaySubject();
  private area3loadingSource = new ReplaySubject();
  private area4loadingSource = new ReplaySubject();

  area1loading$ = this.area1loadingSource.asObservable();
  area2loading$ = this.area2loadingSource.asObservable();
  area3loading$ = this.area3loadingSource.asObservable();
  area4loading$ = this.area4loadingSource.asObservable();

  public language = this.languageService.selectedLanguage;

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
    private languageService: LanguageService,
    private locationService: LocationService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.area1loadingSource.next(true);
    this.locationService.getAdm1().subscribe(
      (data) => {
        this.administrativeArea1Locations['adm1'] = data;
        this.area1loadingSource.next(false);
      },
      (_) => this.area1loadingSource.next(false)
    );

    this.form.valueChanges.subscribe((value) => (this.value = value));
  }

  getLabel(administrativeLevel: string) {
    if (
      administrativeLevel in this.language &&
      this.countryIso in this.language[administrativeLevel]
    ) {
      return this.language[administrativeLevel][this.countryIso];
    }
    return undefined;
  }

  loadAdministrativeArea2Locations(adm1?: number) {
    if (adm1) {
      this.area2loadingSource.next(true);
      this.locationService.getAdm2({ adm1 }).subscribe(
        (data) => {
          this.administrativeArea1Locations['adm2'] = data;
          this.area2loadingSource.next(false);
        },
        (_) => this.area2loadingSource.next(false)
      );
    }
  }

  loadAdministrativeArea2LocationsWithReset(adm1?: number) {
    this.loadAdministrativeArea2Locations(adm1);
    this.form.controls.adm2.reset();
    this.form.controls.adm3.reset();
    this.form.controls.adm4.reset();
  }

  loadAdministrativeArea3Locations(adm2?: number) {
    if (adm2) {
      this.area3loadingSource.next(true);
      this.locationService.getAdm3({ adm2 }).subscribe(
        (data) => {
          this.administrativeArea1Locations['adm3'] = data;
          this.area3loadingSource.next(false);
        },
        (_) => this.area3loadingSource.next(false)
      );
    }
  }

  loadAdministrativeArea3LocationsWithReset(adm1?: number) {
    this.loadAdministrativeArea3Locations(adm1);
    this.form.controls.adm3.reset();
    this.form.controls.adm4.reset();
  }

  loadAdministrativeArea4Locations(adm3?: number) {
    if (adm3) {
      this.area4loadingSource.next(true);
      this.locationService.getAdm4({ adm3 }).subscribe(
        (data) => {
          this.administrativeArea1Locations['adm4'] = data;
          this.area4loadingSource.next(false);
        },
        (_) => this.area4loadingSource.next(false)
      );
    }
  }

  loadAdministrativeArea4LocationsWithReset(adm1?: number) {
    this.loadAdministrativeArea4Locations(adm1);
    this.form.controls.adm4.reset();
  }

  private createForm() {
    this.form = this.fb.group({
      adm1: [],
      adm2: [],
      adm3: [],
      adm4: [],
    });
  }

  private getLocationId() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(location: any): void {
    if (location.adm1) {
      this.loadAdministrativeArea2Locations(location.adm1);
    }
    if (location.adm2) {
      this.loadAdministrativeArea3Locations(location.adm2);
    }
    if (location.adm3) {
      this.loadAdministrativeArea4Locations(location.adm3);
    }

    forkJoin([
      this.area1loading$.pipe(
        filter((value) => !value),
        take(1)
      ),
      this.area2loading$.pipe(
        filter((value) => !value),
        take(1)
      ),
      this.area3loading$.pipe(
        filter((value) => !value),
        take(1)
      ),
      this.area4loading$.pipe(
        filter((value) => !value),
        take(1)
      ),
    ]).subscribe(() => (this.value = location));
  }

  set value(val) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    if (val) {
      this.form.patchValue(val, { emitEvent: false });
    }

    this.onChange(val);
    this.onTouch(val);
  }
}

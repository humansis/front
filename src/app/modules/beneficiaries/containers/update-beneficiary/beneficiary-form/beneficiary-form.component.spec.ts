import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryFormComponent } from './beneficiary-form.component';
import { Injector } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { setAppInjector } from 'src/app/app-injector';

describe('BeneficiaryFormComponent', () => {
  let component: BeneficiaryFormComponent;
  let fixture: ComponentFixture<BeneficiaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiaryFormComponent],
      imports: [NgSelectModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(BeneficiaryFormComponent);
    component = fixture.componentInstance;
    component.options = {
      vulnerabilityList: [],
      countryCodesList: [],
      phoneList: [],
      genderList: [],
      nationalIdList: [],
      residencyStatusList: [],
      referralTypeList: [],
    };
    component.form = new FormGroup({
      referralType: new FormControl(),
      referralComment: new FormControl(),
      addReferral: new FormControl(),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

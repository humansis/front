import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintErrorComponent } from './hint-error.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomModelField } from '../../models/custom-models/custom-model-field';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { NgSelectModule } from '@ng-select/ng-select';

describe('HintErrorComponent', () => {
  let component: HintErrorComponent;
  let fixture: ComponentFixture<HintErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HintErrorComponent],
      imports: [ReactiveFormsModule, NgSelectModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(HintErrorComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({});
    component.field = new CustomModelField<any>({});

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

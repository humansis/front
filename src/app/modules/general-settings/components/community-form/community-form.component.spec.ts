import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFormComponent } from './community-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdministrativeAreaInputComponent } from '../../../../components/administrative-area/administrative-area-input.component';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../app-injector';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommunityFormComponent', () => {
  let component: CommunityFormComponent;
  let fixture: ComponentFixture<CommunityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityFormComponent, AdministrativeAreaInputComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(CommunityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

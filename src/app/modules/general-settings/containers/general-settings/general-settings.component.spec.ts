import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSettingsComponent } from './general-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../../../core/api/user.service';
import { UserMockService } from '../../../../core/api/mock/user-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SettingsComponent', () => {
  let component: GeneralSettingsComponent;
  let fixture: ComponentFixture<GeneralSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralSettingsComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, RouterTestingModule],
      providers: [{ provide: UserService, useClass: UserMockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(GeneralSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormComponent } from './json-form.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LocationService } from '../../core/api/location.service';
import { LocationMockService } from '../../core/api/mock/location-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JsonFormComponent', () => {
  let component: JsonFormComponent;
  let fixture: ComponentFixture<JsonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JsonFormComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [
        {
          provide: LocationService,
          useClass: LocationMockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(JsonFormComponent);
    component = fixture.componentInstance;
    component.schema = new Object();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

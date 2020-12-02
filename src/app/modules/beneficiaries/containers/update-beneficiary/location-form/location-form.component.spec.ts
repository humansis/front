import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFormComponent } from './location-form.component';
import { Injector } from '@angular/core';
import { setAppInjector } from 'src/app/app-injector';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LocationFormComponent', () => {
  let component: LocationFormComponent;
  let fixture: ComponentFixture<LocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LocationFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(LocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

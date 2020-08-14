import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFieldComponent } from './display-field.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UppercaseFirstPipe } from '../../shared/pipes/uppercase-first.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DisplayFieldComponent', () => {
  let component: DisplayFieldComponent;
  let fixture: ComponentFixture<DisplayFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFieldComponent, UppercaseFirstPipe],
      imports: [HttpClientTestingModule, MatSnackBarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(DisplayFieldComponent);
    component = fixture.componentInstance;
    component.field = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

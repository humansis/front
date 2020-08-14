import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPropertiesComponent } from './box-properties.component';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { Distribution } from '../../../models/distribution';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';

describe('BoxPropertiesComponent', () => {
  let component: BoxPropertiesComponent;
  let fixture: ComponentFixture<BoxPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxPropertiesComponent, UppercaseFirstPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(BoxPropertiesComponent);
    component = fixture.componentInstance;
    component.displayedInstance = new Distribution();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

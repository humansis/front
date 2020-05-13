import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSettingsComponent } from './dynamic-settings.component';

describe('DynamicSettingsComponent', () => {
  let component: DynamicSettingsComponent;
  let fixture: ComponentFixture<DynamicSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicSettingsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

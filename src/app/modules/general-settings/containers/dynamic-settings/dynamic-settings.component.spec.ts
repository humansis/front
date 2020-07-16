import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSettingsComponent } from './dynamic-settings.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DynamicSettingsComponent', () => {
  let component: DynamicSettingsComponent;
  let fixture: ComponentFixture<DynamicSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicSettingsComponent],
      imports: [RouterTestingModule],
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

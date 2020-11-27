import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceParametersFormComponent } from './assistance-parameters-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

describe('AssistanceParametersFormComponent', () => {
  let component: AssistanceParametersFormComponent;
  let fixture: ComponentFixture<AssistanceParametersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgSelectModule],
      declarations: [AssistanceParametersFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceParametersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

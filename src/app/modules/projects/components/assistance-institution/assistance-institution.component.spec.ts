import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceInstitutionComponent } from './assistance-institution.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

describe('AssistanceInstitutionComponent', () => {
  let component: AssistanceInstitutionComponent;
  let fixture: ComponentFixture<AssistanceInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgSelectModule],
      declarations: [AssistanceInstitutionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

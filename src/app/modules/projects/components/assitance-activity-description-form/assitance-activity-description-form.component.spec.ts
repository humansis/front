import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitanceActivityDescriptionFormComponent } from './assitance-activity-description-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AssitanceActivityDescriptionFormComponent', () => {
  let component: AssitanceActivityDescriptionFormComponent;
  let fixture: ComponentFixture<AssitanceActivityDescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AssitanceActivityDescriptionFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitanceActivityDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

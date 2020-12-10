import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceCriteriaGroupComponent } from './assistance-criteria-group.component';

describe('AssistanceCriteriaGroupComponent', () => {
  let component: AssistanceCriteriaGroupComponent;
  let fixture: ComponentFixture<AssistanceCriteriaGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssistanceCriteriaGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceCriteriaGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceCommunityComponent } from './assistance-community.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

describe('AssistanceCommunityComponent', () => {
  let component: AssistanceCommunityComponent;
  let fixture: ComponentFixture<AssistanceCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgSelectModule],
      declarations: [AssistanceCommunityComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

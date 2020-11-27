import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceCommodityGroupComponent } from './assistance-commodity-group.component';

describe('AssistanceCommodityGroupComponent', () => {
  let component: AssistanceCommodityGroupComponent;
  let fixture: ComponentFixture<AssistanceCommodityGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssistanceCommodityGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceCommodityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

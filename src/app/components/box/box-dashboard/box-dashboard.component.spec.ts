import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDashboardComponent } from './box-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BoxDashboardComponent', () => {
  let component: BoxDashboardComponent;
  let fixture: ComponentFixture<BoxDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BoxDashboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDashboardComponent);
    component = fixture.componentInstance;
    component.info = { icon: 'group', color: 'green', title: 'test', ref: '' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

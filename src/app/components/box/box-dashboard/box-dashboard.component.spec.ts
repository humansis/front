import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDashboardComponent } from './box-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';

import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';

describe('BoxDashboardComponent', () => {
  let component: BoxDashboardComponent;
  let fixture: ComponentFixture<BoxDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BoxDashboardComponent, UppercaseFirstPipe],
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

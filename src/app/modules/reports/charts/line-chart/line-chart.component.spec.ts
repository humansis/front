import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartComponent } from './line-chart.component';
import { TitleCasePipe } from '@angular/common';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartComponent],
      providers: [TitleCasePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    component.graphInfo = { name: '', type: '', values: {} };
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

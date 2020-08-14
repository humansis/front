import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChartComponent } from './base-chart.component';
import { TitleCasePipe } from '@angular/common';

describe('BaseChartComponent', () => {
  let component: BaseChartComponent;
  let fixture: ComponentFixture<BaseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseChartComponent],
      providers: [TitleCasePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

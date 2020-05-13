import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTableComponent } from './clean-table.component';

describe('CleanTableComponent', () => {
  let component: CleanTableComponent;
  let fixture: ComponentFixture<CleanTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CleanTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

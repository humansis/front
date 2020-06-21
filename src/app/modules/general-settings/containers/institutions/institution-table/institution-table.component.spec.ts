import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionTableComponent } from './institution-table.component';

describe('InstitutionTableComponent', () => {
  let component: InstitutionTableComponent;
  let fixture: ComponentFixture<InstitutionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

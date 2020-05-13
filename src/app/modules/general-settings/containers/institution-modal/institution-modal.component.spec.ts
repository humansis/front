import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionModalComponent } from './institution-modal.component';

describe('InstitutionModalComponent', () => {
  let component: InstitutionModalComponent;
  let fixture: ComponentFixture<InstitutionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

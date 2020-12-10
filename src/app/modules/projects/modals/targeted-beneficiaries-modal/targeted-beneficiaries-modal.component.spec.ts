import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetedBeneficiariesModalComponent } from './targeted-beneficiaries-modal.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('TargetedBeneficiariesModalComponent', () => {
  let component: TargetedBeneficiariesModalComponent;
  let fixture: ComponentFixture<TargetedBeneficiariesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatSnackBarModule],
      declarations: [TargetedBeneficiariesModalComponent],
      providers: [
        {
          // I was expecting this will pass the desired value
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetedBeneficiariesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

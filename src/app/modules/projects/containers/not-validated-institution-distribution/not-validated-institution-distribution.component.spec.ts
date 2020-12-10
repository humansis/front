import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotValidatedInstitutionDistributionComponent } from './not-validated-institution-distribution.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('NotValidatedInstitutionDistributionComponent', () => {
  let component: NotValidatedInstitutionDistributionComponent;
  let fixture: ComponentFixture<NotValidatedInstitutionDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
      ],
      declarations: [NotValidatedInstitutionDistributionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotValidatedInstitutionDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

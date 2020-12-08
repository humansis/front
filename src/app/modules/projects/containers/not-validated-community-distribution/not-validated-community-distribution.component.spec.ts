import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotValidatedCommunityDistributionComponent } from './not-validated-community-distribution.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('NotValidatedCommunityDistributionComponent', () => {
  let component: NotValidatedCommunityDistributionComponent;
  let fixture: ComponentFixture<NotValidatedCommunityDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        RouterTestingModule,
        MatDialogModule,
      ],
      declarations: [NotValidatedCommunityDistributionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotValidatedCommunityDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

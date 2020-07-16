import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTableComponent } from './community-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CommunityService } from '../../../../../core/api/community.service';
import { CommunityMockService } from '../../../../../core/api/mock/community-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommunityTableComponent', () => {
  let component: CommunityTableComponent;
  let fixture: ComponentFixture<CommunityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityTableComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatDialogModule],
      providers: [{ provide: CommunityService, useClass: CommunityMockService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

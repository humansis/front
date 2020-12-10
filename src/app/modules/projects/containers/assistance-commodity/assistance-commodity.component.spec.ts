import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceCommodityComponent } from './assistance-commodity.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AssistanceCommodityComponent', () => {
  let component: AssistanceCommodityComponent;
  let fixture: ComponentFixture<AssistanceCommodityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [AssistanceCommodityComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceCommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

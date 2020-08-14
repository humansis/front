import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileMoneyComponent } from './mobile-money.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../../app-injector';
import { Distribution } from '../../../../../models/distribution';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MobileMoneyComponent', () => {
  let component: MobileMoneyComponent;
  let fixture: ComponentFixture<MobileMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
      declarations: [MobileMoneyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(MobileMoneyComponent);
    component = fixture.componentInstance;
    component.actualDistribution = new Distribution();
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

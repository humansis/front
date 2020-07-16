import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralReliefComponent } from './general-relief.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../../../app-injector';
import { Distribution } from '../../../../../models/distribution';
import { UppercaseFirstPipe } from '../../../../../shared/pipes/uppercase-first.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GeneralReliefComponent', () => {
  let component: GeneralReliefComponent;
  let fixture: ComponentFixture<GeneralReliefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
      declarations: [GeneralReliefComponent, UppercaseFirstPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(GeneralReliefComponent);
    component = fixture.componentInstance;
    component.actualDistribution = new Distribution();
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDistributionComponent } from './add-distribution.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { ProjectService } from '../../../core/api/project.service';
import { ProjectMockService } from '../../../core/api/mock/project-mock.service';
import { LocationService } from '../../../core/api/location.service';
import { LocationMockService } from '../../../core/api/mock/location-mock.service';
import { CriteriaService } from '../../../core/api/criteria.service';
import { CriteriaMockService } from '../../../core/api/mock/criteria-mock.service';
import { DistributionService } from '../../../core/api/distribution.service';
import { DistributionMockService } from '../../../core/api/mock/distribution-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddDistributionComponent', () => {
  let component: AddDistributionComponent;
  let fixture: ComponentFixture<AddDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddDistributionComponent, UppercaseFirstPipe],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ProjectService,
          useClass: ProjectMockService,
        },
        {
          provide: LocationService,
          useClass: LocationMockService,
        },
        {
          provide: CriteriaService,
          useClass: CriteriaMockService,
        },
        {
          provide: DistributionService,
          useClass: DistributionMockService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(AddDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { setAppInjector } from '../../../app-injector';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { ProjectService } from '../../../core/api/project.service';
import { ProjectMockService } from '../../../core/api/mock/project-mock.service';
import { DistributionService } from '../../../core/api/distribution.service';
import { DistributionMockService } from '../../../core/api/mock/distribution-mock.service';
import { UserService } from '../../../core/api/user.service';
import { UserMockService } from '../../../core/api/mock/user-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectComponent, UppercaseFirstPipe],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
      providers: [
        { provide: ProjectService, useClass: ProjectMockService },
        { provide: DistributionService, useClass: DistributionMockService },
        { provide: UserService, useClass: UserMockService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const injector = TestBed.inject(Injector);
    setAppInjector(injector);
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

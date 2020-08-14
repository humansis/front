import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';
import { CustomModelMockService } from './custom-model-mock.service';
import { of } from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root',
})
export class BeneficiariesMockService extends CustomModelMockService {
  constructor() {
    super();
  }

  public getOne(id: number) {
    return of();
  }

  public getRandom(distributionId, size: number) {
    return of();
  }

  public add(distributionId: number, beneficiaries: any[], justification: string) {
    return of();
  }

  public getAllFromProject(projectId: number, target: string) {
    return of();
  }

  public import(distributionId: number, file: any, step: number) {
    return of();
  }

  public listApi() {
    return of();
  }

  public importApi(apiObject: any, project: Project) {
    return of();
  }
}

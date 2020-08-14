import { Injectable } from '@angular/core';
import { Project } from '../../../models/project';
import { CustomModelMockService } from './custom-model-mock.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectMockService extends CustomModelMockService {
  customModelPath = 'projects';

  constructor() {
    super();
  }

  public addBeneficiaries(projectId: number, checkedElements: any) {
    return of({});
  }

  public getOne(id: number) {
    return of({});
  }
}

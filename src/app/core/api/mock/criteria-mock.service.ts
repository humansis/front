import { Injectable } from '@angular/core';
import { Criteria, CriteriaCondition } from 'src/app/models/criteria';
import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class CriteriaMockService extends CustomModelMockService {
  constructor() {
    super();
  }

  public getBeneficiariesNumber(
    distributionType: string,
    criteriaArray: Criteria[],
    threshold: number,
    project: string
  ) {}

  /**
   * get the lit of vulnerability criteria
   */
  public getVulnerabilityCriteria() {}

  fillConditionOptions(criteria: Criteria, fieldName: string) {}

  /**
   * get the lit of camps
   */
  public getCamps() {}
}

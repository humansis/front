import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';
import { Criteria, CriteriaCondition } from 'src/app/models/criteria';
import { CustomModelService } from '../utils/custom-model.service';
import { HttpService } from '../network/http.service';

@Injectable({
  providedIn: 'root',
})
export class CriteriaService extends CustomModelService {
  customModelPath = 'distributions/criteria';
  constructor(protected http: HttpService, protected languageService: LanguageService) {
    super(http, languageService);
  }

  /**
   * get the lit of vulnerability criteria
   */
  public getVulnerabilityCriteria() {
    const url = this.apiBase + '/vulnerability_criteria';
    return this.http.get(url);
  }

  fillConditionOptions(criteria: Criteria, fieldName: string) {
    const conditions = new Array<CriteriaCondition>();
    let conditionNames = [];

    const compared = [
      'dateOfBirth',
      'headOfHouseholdDateOfBirth',
      'householdSize',
      'incomeLevel',
    ];
    const booleanFields = [
      'disabled',
      'disabledHeadOfHousehold',
      'soloParent',
      'lactating',
      'pregnant',
      'nutritionalIssues',
      'chronicallyIll',
    ];
    const equal = [
      'livelihood',
      'foodConsumptionScore',
      'campName',
      'copingStrategiesIndex',
      'hasNotBeenInDistributionsSince',
      'currentLocation',
    ];

    if (compared.includes(fieldName)) {
      conditionNames = ['>', '<', '>=', '<=', '=', '!='];
    } else if (booleanFields.includes(fieldName)) {
      conditionNames = ['true', 'false'];
    } else if (equal.includes(fieldName)) {
      conditionNames = ['='];
    } else {
      conditionNames = ['=', '!='];
    }

    conditionNames.forEach((name, index) => {
      const condition = new CriteriaCondition(index.toString(), name);
      conditions.push(condition);
    });
    criteria.setOptions('condition', conditions);
  }

  /**
   * get the lit of camps
   */
  public getCamps() {
    const url = this.apiBase + '/camps';
    return this.http.get(url);
  }
}

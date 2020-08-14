import { Injectable } from '@angular/core';
import { HouseholdFilters } from 'src/app/models/data-sources/households-data-source';
import { Household } from '../../../models/household';
import { Observable, of } from 'rxjs';
import { DataChange } from 'src/app/models/api/data-change';
import { IHousehold } from 'src/app/models/api/household';
import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class HouseholdsMockService extends CustomModelMockService {
  constructor() {
    super();
  }

  public getOne(beneficiaryId) {}

  /**
   * Get all households
   * @param newHouseholds any
   */
  public getImported(newHouseholds: any) {}

  /**
   * Upload CSV  and data validation to import new household
   * @param body any
   * @param projectId number
   * @param step number
   * @param token string
   */
  public sendDataToValidation(
    email: string,
    body: any,
    projectId: number,
    token?: string
  ) {}

  /**
   * Add household.
   * @param hh
   * @param projects_ids
   */
  public add(hh: any, projects_ids: string[]) {}

  /**
   * Update household.
   * @param householdId
   * @param hh
   * @param projects_ids
   */
  public edit(householdId: number, hh: any, projects_ids: string[]) {}

  /**
   * Export beneficiaries
   * @param  extensionType type of file to export
   * @return               file
   */
  public export(extensionType: string, filters: any = null, ids: Array<string> = []) {}

  /**
   * Export householdsTemplate
   * @param  extensionType type of file to export
   * @return               file
   */
  public exportTemplate(extensionType: string) {}

  public deleteMany(householdIds: Array<number>) {}

  public testFileTemplate(file: any, location: any) {}

  public visit(householdId) {}

  public getHouseholdHistory(householdId: number): Observable<DataChange<IHousehold>[]> {
    return of();
  }
}

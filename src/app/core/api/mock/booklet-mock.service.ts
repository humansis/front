import { Injectable } from '@angular/core';
import { Booklet } from 'src/app/models/booklet';
import { BookletFilters } from 'src/app/models/data-sources/booklets-data-source';
import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class BookletMockService extends CustomModelMockService {
  constructor() {
    super();
  }
  public setPassword(code: string, password: string) {}

  public assignBenef(code: string, idBeneficiary: number, idDistribution) {}

  /**
   * Get all booklets page by page
   * @param body any
   */
  public getAll() {}

  public getInsertedBooklets(lastId: number) {}

  /**
   * Export booklet codes
   * @param  extensionType type of file to export
   * @return               file
   */
  public export(extensionType: string, filters: any = null, ids: Array<string> = []) {}
}

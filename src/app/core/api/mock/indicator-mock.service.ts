import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndicatorMockService {
  constructor() {}

  public getIndicators(body?: any) {}

  public getIndicator(idIndicator: number) {}

  public serveIndicator(body: any, id) {}

  public getAllGraphs(filters: object) {}

  public exportReportData(filters: object, fileType: string) {}

  private formatFilters(filters: object) {}
}

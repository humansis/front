import { Injectable } from '@angular/core';
import { Location } from 'src/app/models/location';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationMockService {
  constructor() {}

  /**
   * Get all adm1
   */
  public getAdm1() {
    return of();
  }

  /**
   * Get all adm2 associate to the selected adm1
   * @param body
   */
  public getAdm2(body?: any) {
    return of();
  }

  /**
   * Get all adm3 associate to the selected adm2
   * @param body
   */
  public getAdm3(body?: any) {
    return of();
  }

  /**
   * Get all adm4 associate to the selected adm3
   * @param body
   */
  public getAdm4(body?: any) {
    return of();
  }

  /**
   * Get the codes of the upcoming distributions
   */
  public getUpcomingDistributionCode() {}

  fillAdm1Options(location: Location) {
    return of();
  }

  fillAdm2Options(location: Location, adm1Id: Number) {
    return of();
  }

  fillAdm3Options(location: Location, adm2Id: Number) {
    return of();
  }

  fillAdm4Options(location: Location, adm3Id: Number) {
    return of();
  }

  getCamps(admType, admId) {}
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from 'src/app/models/country';
import { Distribution } from 'src/app/models/distribution';
import { StoredRequest } from 'src/app/models/interfaces/stored-request';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { Language } from '../../language/language';
import { CachedCountryReturnValue } from '../../storage/cached-country-value.interface';

@Injectable({
  providedIn: 'root',
})
export class AsyncacheMockService {
  constructor() {}

  private getFormattedKey(key: string): Observable<string> {
    return of();
  }

  private formatKeyCountry(key: string, country: Country) {
    return of();
  }

  //
  // ─── GET, SET, DELETE, CLEAR ──────────────────────────────────────────────────────────────────────
  //

  /**
   * Get an item from the cache asynchronously.
   * @param key
   */
  get(key: string) {
    return of();
  }

  /**
   * Observable version of set
   * @param key
   * @param value
   * @param options
   */
  set(key: string, value: any, options: any = {}): Observable<boolean> {
    return of();
  }

  removeItem(key: string) {
    return of();
  }

  /**
   * Clear all the cache.
   * @param force - `true` to clear all the cache, `false` to exclude some fields
   * @param excludedFields - fields to keep after the clear
   */
  clear(force: boolean = true, excludedFields?: string[]) {
    return of();
  }

  //
  // ─── LANGUAGE UTILS ──────────────────────────────────────────────────────────────────────
  //

  setLanguage(language: Language): Observable<any> {
    return of();
  }

  getLanguage(): Observable<Language> {
    return of();
  }

  //
  // ─── COUNTRY UTILS ──────────────────────────────────────────────────────────────────────
  //

  setCountry(
    country: Country,
    updatedInLastSession: boolean = true
  ): Observable<boolean> {
    return of();
  }

  getCountry(): Observable<CachedCountryReturnValue> {
    return of();
  }

  removeCountry() {
    return of();
  }
  removeLanguage() {
    return of();
  }

  //
  // ─── USER UTILS ──────────────────────────────────────────────────────────────────────
  //

  setUser(user: any): Observable<boolean> {
    return of();
  }

  /**
   * Waits for asynchronous user value to return it synchronously.
   */
  getUser(): Observable<User> {
    return of();
  }

  //
  // ─── CACHED REQUESTS ──────────────────────────────────────────────────────────────────────
  //

  /**
   * When requesting offline, this method will permit to store a special request object to save wanted PUTs/POSTs/DELETEs.
   * @param type
   * @param request
   */
  storeRequest(request: StoredRequest) {
    return of();
  }

  useMethod(request: StoredRequest): Observable<any> {
    return of();
  }

  //
  // ─── DISTRIBUTION BENEFICIARIES ──────────────────────────────────────────────────────────────────────
  //

  /**
   * Store beneficiaries in the caChe
   */
  storeBeneficiaries(
    project: Project,
    distribution: Distribution,
    beneficiaries: Array<any>
  ): Observable<any> {
    return of();
  }

  checkForBeneficiaries(distribution: Distribution): Observable<boolean> {
    return of();
  }
}

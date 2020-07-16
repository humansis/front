import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralMockService {
  constructor() {}

  public getSummary() {
    return of();
  }
}

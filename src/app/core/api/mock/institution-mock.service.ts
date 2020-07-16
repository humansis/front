import { Injectable } from '@angular/core';

import { Institution } from 'src/app/models/api/institution';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstitutionMockService {
  constructor() {}

  public get() {
    return of();
  }

  public getOne(id: number) {
    return of();
  }

  public create(institution: Institution) {
    return of();
  }

  public update(id: number, body: any) {
    return of();
  }

  public delete(id: number) {
    return of();
  }
}

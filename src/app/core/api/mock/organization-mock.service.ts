import { Injectable } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { CustomModelMockService } from './custom-model-mock.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrganizationMockService extends CustomModelMockService {
  constructor() {
    super();
  }

  print(event: Organization) {}

  public getServiceStatus(serviceId: string): Observable<boolean> {
    return of();
  }
}

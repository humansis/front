import { Injectable } from '@angular/core';
import { Log } from 'src/app/models/log';
import { of } from 'rxjs';
import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class LogsMockService extends CustomModelMockService {
  constructor() {
    super();
  }

  public getDetails(log: Log) {
    return of();
  }

  private getDataFromService(objectName: string, id: Number, service: any) {
    return of();
  }

  private setBeneficiaries(request: string): string {
    return '';
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/network/http.service';
import { Institution } from 'src/app/models/api/institution';
import { URL_BMS_API } from 'src/environments/environment';
import { Community } from 'src/app/models/api/community';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunityMockService {
  constructor() {}

  public get() {
    return of();
  }

  public getOne(id: number) {
    return of();
  }

  public create(community: Community) {
    return of();
  }

  public update(id: number, body: any) {
    return of();
  }

  public delete(id: number) {
    return of();
  }
}

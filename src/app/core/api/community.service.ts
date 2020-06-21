import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/network/http.service';
import { Institution } from 'src/app/models/api/institution';
import { URL_BMS_API } from 'src/environments/environment';
import { Community } from 'src/app/models/api/community';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  readonly api = URL_BMS_API + '/communities';
  constructor(private http: HttpService) {}

  public get() {
    const pageIndex = 0;
    const pageSize = 2000;
    const filter = {};
    const sort = {};
    return this.http.post(`${this.api}/get/all`, { filter, sort, pageIndex, pageSize });
  }

  public getOne(id: number) {
    const url = `${this.api}/${id}`;
    return this.http.get(url);
  }

  public create(community: Community) {
    return this.http.put(this.api, community);
  }

  public update(id: number, body: any) {
    return this.http.post(`${this.api}/${id}`, body);
  }

  public delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}

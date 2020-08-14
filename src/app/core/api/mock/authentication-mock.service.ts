import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user';
import { CountriesService } from '../../countries/countries.service';
import { HttpService } from '../../network/http.service';
import { AsyncacheService } from '../../storage/asyncache.service';
import { WsseService } from '../../authentication/wsse.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationMockService {
  constructor() {}

  // Request to the API to get the salt corresponding to a username
  requestSalt(username: string) {}

  initializeUser(username: string) {}

  logUser(user) {}

  checkCredentials() {}

  login(username: string, password: string) {}

  sendSMS(body: any, options: any) {}

  logout(): Observable<any> {
    return of();
  }

  getUser(): Observable<User> {
    return of();
  }

  setSaltedPassword(user: User, saltedPassword: string) {}

  resetUser() {}

  public updateUser(body: any, url: string) {}

  public createUser(body: any) {}

  public createVendor(body: any) {}

  public createSaltedPassword(body: any, salt: any) {}

  public loginHumanitarianID(code: string) {}

  public loginGoogle(token: string) {}
}

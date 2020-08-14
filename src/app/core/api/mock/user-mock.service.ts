import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../../models/user';
import { Language } from '../../language/language';
import { CustomModelMockService } from './custom-model-mock.service';

@Injectable({
  providedIn: 'root',
})
export class UserMockService extends CustomModelMockService {
  public currentUser: User = new User();

  constructor() {
    super();
  }

  public setCurrentUser(user: User) {
    return of(this.currentUser);
  }

  public getUserFromCache(): Observable<User> {
    return of(this.currentUser);
  }

  public resetUser() {
    return of();
  }

  public requestPasswordChange(id: number, body: any) {
    return of();
  }

  public updatePassword(user: User, oldPassword: any, newPassword: any) {
    return of();
  }

  public getProjectUser(id: number) {
    return of();
  }

  public setDefaultLanguage(id: number, languageObject: Language): Observable<any[]> {
    return of();
  }

  public hasRights(action: string, condition: boolean = true) {}
}

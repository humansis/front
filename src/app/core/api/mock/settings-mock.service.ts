import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsMockService {
  constructor() {}

  public export(extensionType: string, category: string, country?: string) {}
}

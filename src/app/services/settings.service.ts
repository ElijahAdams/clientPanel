import { Injectable } from '@angular/core';
import { Settings } from '../Models/Settings'
@Injectable()
export class SettingsService {

  settings: Settings = {
    allowRegistration: false,
    disabledBalanceOnAdd: false,
    disableBalanceOnEdit: false
  }
  constructor() { }

  getSettings() : Settings {
    return this.settings;
  }
}

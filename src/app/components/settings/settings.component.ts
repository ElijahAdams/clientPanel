import { Component, OnInit } from '@angular/core';
import { Settings} from '../../Models/Settings';
import { SettingsService } from '../../services/settings.service';
import { Router, } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from "rxjs/operators/timeout";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings : Settings;

  constructor(private settingsService: SettingsService,
              private router: Router,
              private fms : FlashMessagesService
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.fms.show('Settings Saved', {
      cssClass: 'alert-success', timeout: 4000
    })
  }

}

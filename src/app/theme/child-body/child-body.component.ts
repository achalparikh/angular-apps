import { ThemeSwitchServiceService } from './../theme-switch-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-body',
  templateUrl: './child-body.component.html',
  styleUrls: ['./child-body.component.scss']
})
export class ChildBodyComponent implements OnInit {

  constructor(private switchTheme: ThemeSwitchServiceService) { }

  ngOnInit() {
  }

  changeTheme() {
    this.switchTheme.setDarkTheme();
  }

}

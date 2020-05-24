import { ThemeSwitchServiceService } from './../theme-switch-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-body',
  templateUrl: './parent-body.component.html',
  styleUrls: ['./parent-body.component.scss']
})
export class ParentBodyComponent implements OnInit {
  theme: boolean;
  constructor(private switchTheme: ThemeSwitchServiceService) {
    this.switchTheme.darkThemeSubs.subscribe(data => this.theme = data);
  }

  ngOnInit() {
  }

}

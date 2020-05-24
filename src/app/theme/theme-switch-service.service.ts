import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchServiceService {

  public darkTheme = new BehaviorSubject<boolean>(false);
  darkThemeSubs = this.darkTheme.asObservable();
  constructor() { }

  getDarkTheme() {
    return this.darkTheme;
  }

  setDarkTheme() {
    this.darkTheme.next(!this.darkTheme.value);
  }
}

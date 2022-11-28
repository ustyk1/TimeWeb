import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {
  private _menu: boolean = true;

  get menu(): boolean {
    return this._menu;
  }

  set menu(value: boolean) {
    this._menu = value;
  }
  constructor() { }
}

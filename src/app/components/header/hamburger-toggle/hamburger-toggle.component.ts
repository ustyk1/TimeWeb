import { MenuStateService } from './../../../services/menu-state.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-toggle',
  templateUrl: './hamburger-toggle.component.html',
  styleUrls: ['./hamburger-toggle.component.scss']
})
export class HamburgerToggleComponent implements OnInit {

  constructor(public menuStateService: MenuStateService) { }

  ngOnInit(): void {
  }

}

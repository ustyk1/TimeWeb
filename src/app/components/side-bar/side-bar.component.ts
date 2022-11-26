import { Component, OnInit } from '@angular/core';

export interface ILinkItem { 
  path: string;
  iconName: string;
  text: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  title: string = 'Company';

  linkItems: ILinkItem[] = [
    {
      path: '/dashboard',
      text: 'Dashboard',
      iconName: 'dashboard'
    },
    {
      path: '/user-profile',
      text: 'User Profile',
      iconName: 'person'
    },
    {
      path: '#',
      text: 'Maps',
      iconName: 'location_on'
    },
    {
      path: '#',
      text: 'Notifications',
      iconName: 'done_all'
    },
    {
      path: '#',
      text: 'Support',
      iconName: 'language'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByMethod(index:number, el:any): number {
    return el.text;
  }

  // setActive(text: string): void {
  //   this.linkItems.forEach((linkItem: ILinkItem) => {
  //     if (linkItem.text === text) {
  //       linkItem.isActive = true;
  //     } else {
  //       linkItem.isActive = false;
  //     }
  //   })
  // }
}

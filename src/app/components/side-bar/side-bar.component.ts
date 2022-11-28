import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { MenuStateService } from 'src/app/services/menu-state.service';

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

  hamburgerToggle: any = document.getElementById('hamburger-toggle');

  constructor(public menuStateService: MenuStateService) { }

  ngOnInit(): void {
  }

  trackByMethod(index:number, el:any): number {
    return el.text;
  }

  @HostBinding('class') classes = 'backdrop-blur-sm bg-white/30 absolute xl:static left-[-500px] transition-all ease-in-out duration-1000';

  @HostBinding('class.open')
  @HostBinding('class.right-0')
  get isOpened() { return this.menuStateService.menu; };

  @HostListener('window:resize', ['$event'])
  autoOpenMenu(e: Event): void {

    if(window.innerWidth >= 800) {
      this.menuStateService.menu = false;
     }
  };
  
  @HostListener('click', ['$event']) 
  closeMenu(e: Event): void {
    console.log(e)
    const element = e.target as HTMLElement;     

    e.stopPropagation();
    
    if(element.tagName === 'ASIDE') {
      this.menuStateService.menu = false;
    }
  };
}

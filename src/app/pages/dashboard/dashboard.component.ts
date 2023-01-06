import { Component, OnInit } from '@angular/core';

export interface ICard { 
  title: string;
  index: string;
  indexIcon: string;
  cardIconName: string;
  info: string;
  infoIconName: string;
  cardIconBackgroundColor: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string = 'Dashboard';

  cards: ICard[] = [
    {
      title: 'Used Space',
      cardIconName: 'assets/images/svg/data_white.svg',
      cardIconBackgroundColor: '#22c55e',
      index: '49/50 GB',
      indexIcon: '',
      info: 'Get more space...',
      infoIconName: 'report_problem',
    },
    {
      title: 'Revenue',
      cardIconName: '../../../../assets/images/svg/shop_white.svg',
      cardIconBackgroundColor: '#eab308',
      index:  `  34,245`,
      indexIcon: 'attach_money',
      info: 'Last 24 Hours',
      infoIconName: 'calendar_today',
    },
    {
      title: 'Fixed Issues',
      cardIconName: '../../../../assets/images/svg/tag_white.svg',
      cardIconBackgroundColor: '#3b82f6',
      index: '75',
      indexIcon: '',
      info: 'Tracked from Github',
      infoIconName: 'file_download', 
    },
    {
      title: 'Followers',
      cardIconName: '../../../../assets/images/svg/paperplane_white.svg',
      cardIconBackgroundColor: '#db2777',
      index: '245',
      indexIcon: 'add',
      info: 'Just updated',
      infoIconName: 'access_time',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByMethod(index:number, el:any): number {
    return el.text;
  }
}

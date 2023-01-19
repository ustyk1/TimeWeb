import { IActivityCard, IPerformanceCard, ITaskForBug, ITasksCardMenuTab } from './../pages/dashboard/dashboard.component';
import { Injectable } from '@angular/core';
import { map, Observable, of, timer } from 'rxjs';

export interface IData {
  performanceCards: IPerformanceCard[],
  activityCards: IActivityCard[]; 
  tasksCardMenuTabs: ITasksCardMenuTab[];
  tasksForBugs: ITaskForBug[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: IData = {
    performanceCards: [
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
    ],
    activityCards: [
      {
        cardIconBackgroundColor: '#22c55e',
          title: 'Daily Sales',
          subtitle: '55% increase in today sales',
          info: 'updated 4 minutes ago',
          infoIconName: 'access_time',
      },
      {
        cardIconBackgroundColor: '#eab308',
          title: 'Email Subscripions',
          subtitle: 'Last Campaign Performance',
          info: 'campaign sent 2 days ago',
          infoIconName: 'access_time',
      },
      {
        cardIconBackgroundColor: '#3b82f6',
          title: 'Completed Tasks',
          subtitle: 'Last Campaign Performance',
          info: 'campaign event 2 days ago',
          infoIconName: 'access_time',
      }
    ],

    tasksCardMenuTabs: [
      {
        linkIconName_1: 'bug_report',
        linkTitle_1: 'Bugs',
         
        linkIconName_2: 'language',
        linkTitle_2: 'Website',
          
        linkIconName_3: 'cloud',
        linkTitle_3: 'Server',
      }
    ],

    tasksForBugs: [
      { 
        bugTaskTitle_1: 'Sign cotract for "What are conference  organizers afraid of?"',
        bugTaskTitle_2: 'Sign cotract for "What are conference organizers afraid of?"',
        bugTaskTitle_3: 'Sign cotract for "What are conference organizers afraid of?"',
        bugTaskTitle_4: 'Sign cotract for "What are conference organizers afraid of?"' 
      }
    ]
  }

  public getCards(): Observable<IPerformanceCard[]> {
    return timer(1000).pipe(
      map(() => this._data.performanceCards)
    )
  }
  
  public getActivityCards(): Observable<IActivityCard[]> {
    return timer(1000).pipe(
      map(() => this._data.activityCards)
    )
  }

  public getHeaderOfTasksCards(): Observable<ITasksCardMenuTab[]> {
    return timer(1000).pipe(
      map(() => this._data.tasksCardMenuTabs)
    )
  }

  public gettasksForBugs(): Observable<ITaskForBug[]> {
    return timer(1000).pipe(
      map(() => this._data.tasksForBugs)
    )
  }
}

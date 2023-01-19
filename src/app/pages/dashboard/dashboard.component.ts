import { SpinnerService } from './../../services/spinner.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

export interface IPerformanceCard { 
  title: string;
  index: string;
  indexIcon: string;
  cardIconName: string;
  info: string;
  infoIconName: string;
  cardIconBackgroundColor: string;
}

export interface IActivityCard { 
  cardIconBackgroundColor: string;
  title: string;
  subtitle: string;
  info: string;
  infoIconName: string;
}

export interface ITasksCardMenuTab { 
  linkIconName_1: string,
  linkTitle_1: string,
         
  linkIconName_2: string,
  linkTitle_2: string,
    
  linkIconName_3: string,
  linkTitle_3: string,
}

export interface ITaskForBug { 
  bugTaskTitle_1: string,
  bugTaskTitle_2: string,
  bugTaskTitle_3: string,
  bugTaskTitle_4: string, 
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  public title: string = 'Dashboard';
  public performanceCards!: IPerformanceCard[];
  public activityCards!: IActivityCard[];
  public tasksCardMenuTabs!: ITasksCardMenuTab[];
  public tasksForBugs!: ITaskForBug[];


  // public tasksMenu

  constructor(private dataService: DataService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this._subscriptions.push(
      this.dataService.getCards().subscribe((cards: IPerformanceCard[]): void => {
        this.performanceCards = cards;

        this.spinnerService.setSpinner(false);
      })
    );
    
    this._subscriptions.push(
      this.dataService.getActivityCards().subscribe((activityCards: IActivityCard[]): void => {
        this.activityCards = activityCards;

        this.spinnerService.setSpinner(false);
      })
    )

    this._subscriptions.push(
      this.dataService.getHeaderOfTasksCards().subscribe((tasksCardMenuTabs: ITasksCardMenuTab[]): void => {
        this.tasksCardMenuTabs = tasksCardMenuTabs;

        this.spinnerService.setSpinner(false);
      })
    )

    this._subscriptions.push(
      this.dataService.gettasksForBugs().subscribe((tasksForBugs: ITaskForBug[]): void => {
        this.tasksForBugs = tasksForBugs;

        this.spinnerService.setSpinner(false);
      })
    )
  }

  trackByMethod(index:number, el:any): number {
    return el.text;
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription: Subscription) => subscription?.unsubscribe());
  }
}

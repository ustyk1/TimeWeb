import { TASKS_CARD_MENU_TABS } from './../../constants/common';
import { SpinnerService } from './../../services/spinner.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';
import { IActivityCard, INewEmployeeDetails, IPerformanceCard, ITaskForBug, ITasksCardMenuTab } from 'src/app/interfaces/common';

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
  public tasksCardMenuTabs: ITasksCardMenuTab[] = TASKS_CARD_MENU_TABS;
  public tasksForBugs!: ITaskForBug[];
  public newEmployeesDetails!: INewEmployeeDetails[];

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
      this.dataService.getTasksForBugs().subscribe((tasksForBugs: ITaskForBug[]): void => {
        this.tasksForBugs = tasksForBugs;

        this.spinnerService.setSpinner(false);
      })
    )

    this._subscriptions.push(
      this.dataService.getNewEmployeesDetails().subscribe((newEmployeesDetails: INewEmployeeDetails[]): void => {
        this.newEmployeesDetails = newEmployeesDetails;

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

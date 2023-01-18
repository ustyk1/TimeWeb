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
  }

  trackByMethod(index:number, el:any): number {
    return el.text;
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription: Subscription) => subscription?.unsubscribe());
  }
}

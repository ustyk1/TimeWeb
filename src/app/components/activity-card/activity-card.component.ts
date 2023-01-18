import { Component, Input, OnInit } from '@angular/core';
import { IActivityCard } from 'src/app/pages/dashboard/dashboard.component';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {

  @Input() activityCard: IActivityCard | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

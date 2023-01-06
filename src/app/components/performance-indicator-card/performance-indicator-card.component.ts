import { ICard } from '../../pages/dashboard/dashboard.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-indicator-card',
  templateUrl: './performance-indicator-card.component.html',
  styleUrls: ['./performance-indicator-card.component.scss']
})
export class PerformanceIndicatorCardComponent implements OnInit {
  @Input() card: ICard | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

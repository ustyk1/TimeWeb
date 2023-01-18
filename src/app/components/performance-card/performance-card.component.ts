import { IPerformanceCard } from '../../pages/dashboard/dashboard.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-card',
  templateUrl: './performance-card.component.html',
  styleUrls: ['./performance-card.component.scss']
})
export class PerformanceCardComponent implements OnInit {
  @Input() performanceCard: IPerformanceCard | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

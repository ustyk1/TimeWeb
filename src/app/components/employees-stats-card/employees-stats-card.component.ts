import { Component, Input, OnInit } from '@angular/core';
import { INewEmployeeDetails } from 'src/app/pages/dashboard/dashboard.component';

@Component({
  selector: 'app-employees-stats-card',
  templateUrl: './employees-stats-card.component.html',
  styleUrls: ['./employees-stats-card.component.scss']
})
export class EmployeesStatsCardComponent implements OnInit {
  @Input() newEmployeesDetails: INewEmployeeDetails[] | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

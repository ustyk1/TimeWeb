import { Component, Input, OnInit } from '@angular/core';
import { ITaskForBug, ITasksCardMenuTab } from 'src/app/pages/dashboard/dashboard.component';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.scss']
})
export class TasksCardComponent implements OnInit {
  @Input() tasksCardMenuTab: ITasksCardMenuTab | undefined
  @Input() taskForBug: ITaskForBug | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ITaskForBug, ITasksCardMenuTab } from 'src/app/interfaces/common';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.scss']
})
export class TasksCardComponent implements OnInit {
  @Input() tasksCardMenuTabs!: ITasksCardMenuTab[]
  @Input() tasksForBugs: ITaskForBug[] | undefined

  constructor() { }

  ngOnInit(): void {
  }

  public checkActiveTab(tabText: string): void {
    this.tasksCardMenuTabs.forEach((tab: ITasksCardMenuTab):  void => {
      if (tab.linkTitle === tabText) {
        tab.isActive = true;
      } else {
        tab.isActive = false;
      }
    })
  } 
}

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
  linkIconName: string,
  linkTitle: string,
  isActive: boolean
}

export interface ITaskForBug { 
  bugTaskTitle: string,
  isDone: boolean
}

export interface INewEmployeeDetails {
  employeeId: number,
  employeeInitials: string,
  employeeSalary: string,
  employeeCountry: string,
}

export interface IData {
  performanceCards: IPerformanceCard[],
  activityCards: IActivityCard[]; 
  tasksForBugs: ITaskForBug[];
  newEmployeesDetails: INewEmployeeDetails[];
}

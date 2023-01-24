import { ITasksCardMenuTab } from "../interfaces/common";

export const TASKS_CARD_MENU_TABS: ITasksCardMenuTab[] = [
  {
    linkIconName: 'bug_report',
    linkTitle: 'Bugs',
    isActive: true
  },
  {
    linkIconName: 'language',
    linkTitle: 'Website',
    isActive: false
  },
  {          
    linkIconName: 'cloud',
    linkTitle: 'Server',
    isActive: false
  }
];
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILinkItem } from '../side-bar.component';

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss']
})
export class LinkItemComponent implements OnInit {
  @Input() linkItem: ILinkItem | undefined
  // @Output() triggerClick: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  
}

import { Component, OnInit } from '@angular/core';
import { InputTypeEnum } from 'src/app/enums/common';

@Component({
  selector: 'app-profile-edit-card',
  templateUrl: './profile-edit-card.component.html',
  styleUrls: ['./profile-edit-card.component.scss']
})
export class ProfileEditCardComponent implements OnInit {
  public inputTypeEnum: typeof InputTypeEnum =  InputTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}

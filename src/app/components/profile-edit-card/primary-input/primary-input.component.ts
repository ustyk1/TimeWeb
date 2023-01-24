import { Component, Input, OnInit } from '@angular/core';
import { InputTypeEnum } from 'src/app/enums/common';

@Component({
  selector: 'app-primary-input',
  templateUrl: './primary-input.component.html',
  styleUrls: ['./primary-input.component.scss']
})
export class PrimaryInputComponent implements OnInit {
  @Input() labelText: string = '';
  @Input() inputType: InputTypeEnum = InputTypeEnum.TEXT;
  
  public inputTypeEnum: typeof InputTypeEnum =  InputTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}

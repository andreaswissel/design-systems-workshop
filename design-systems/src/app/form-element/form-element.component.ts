import { Component, Input, OnInit } from '@angular/core';
import { InputApi, InputType } from '../input/input.component';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss'],
})
export class FormElementComponent implements OnInit, InputApi {
  uuid: string;

  @Input() inputType: InputType = InputType.text;
  @Input() placeholder: string = 'Form Element Placeholder';
  @Input() value = '';
  @Input() label = 'Input Label';

  constructor() {
    this.uuid = crypto.randomUUID();
  }

  ngOnInit(): void {}
}

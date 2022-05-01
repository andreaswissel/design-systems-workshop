import { Component, Input, OnInit } from '@angular/core';

export enum InputType {
  button = 'button',
  checkbox = 'checkbox',
  color = 'color',
  date = 'date',
  datetimelocal = 'datetime-local',
  email = 'email',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  month = 'month',
  number = 'number',
  password = 'password',
  radio = 'radio',
  range = 'range',
  reset = 'reset',
  search = 'search',
  submit = 'submit',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
  week = 'week',
}

export interface InputApi {
  inputType: InputType;
  placeholder?: string;
  value?: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputType: InputType = InputType.text;
  @Input() placeholder = 'Input Placeholder';
  @Input() value = '';
  @Input() id?: string;

  constructor() {}

  ngOnInit(): void {}
}

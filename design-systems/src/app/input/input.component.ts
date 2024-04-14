import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() inputType: InputType = InputType.text;
  @Input() placeholder: string | undefined;
  @Input() value: string | undefined;
  @Input() id?: string;

  @ViewChild('input', { static: false }) input!: ElementRef<HTMLInputElement>;

  get text(): string {
    return this.input.nativeElement.value;
  }
}

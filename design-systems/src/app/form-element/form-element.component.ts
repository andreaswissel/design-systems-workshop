import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { InputApi, InputComponent, InputType } from '../input/input.component';

@Component({
  selector: 'app-form-element',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.scss',
})
export class FormElementComponent implements InputApi {
  uuid: string;

  @ViewChild(InputComponent, { static: false }) input!: InputComponent;

  @Input() inputType: InputType = InputType.text;
  @Input() placeholder: string = 'Form Element Placeholder';
  @Input() value = '';
  @Input() label = 'Input Label';

  constructor() {
    this.uuid = crypto.randomUUID();
  }
}
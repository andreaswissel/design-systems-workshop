import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementComponent } from './form-element.component';
import { InputModule } from '../input/input.module';

@NgModule({
  declarations: [FormElementComponent],
  imports: [CommonModule, InputModule],
  exports: [FormElementComponent],
})
export class FormElementModule {}

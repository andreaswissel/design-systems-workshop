import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss',
})
export class FormLayoutComponent {
  @Input() columns = 1;
  @Input() heading: string = 'Form Heading';

  get templateColumnsString() {
    return `repeat(${this.columns}, 1fr)`;
  }
}

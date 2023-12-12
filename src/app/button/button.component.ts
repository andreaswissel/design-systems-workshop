import { Component, Input } from '@angular/core';

type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public label: string = 'Button Label';
  @Input() public type: ButtonType = 'primary';
}

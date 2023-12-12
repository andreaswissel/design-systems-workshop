import { Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

type ButtonType = 'primary' | 'secondary';

/**
 * This is the button component. It can be used to build clicky things!
 *
 * [Figma reference](https://www.figma.com/file/X1JRLUCEp6JnoeKAxRPNeF/Angular-Architects-Design-Systems?node-id=1%3A3)
 *  |
 * [Implementation](https://github.com/andreaswissel/design-systems-workshop-latest/blob/lab-6/src/app/button/button.component.ts)
 *  |
 * [Specification](https://github.com/andreaswissel/design-systems-workshop/wiki/Lab-06:-Documentation)
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public label: string = 'Button Label';
  @Input() public type: ButtonType = 'primary';
  @Input() public icon: IconName | undefined;
}

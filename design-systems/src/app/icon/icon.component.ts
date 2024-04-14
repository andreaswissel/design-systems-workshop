import { Component, Input } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { IconName, far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  @Input() public iconName: IconName = 'fingerprint';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}

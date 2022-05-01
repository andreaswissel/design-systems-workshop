import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconComponent],
})
export class IconModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}

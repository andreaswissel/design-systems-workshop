import { Component, Input, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() public iconName: IconName = 'fingerprint';
  @Input() public iconColor: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}

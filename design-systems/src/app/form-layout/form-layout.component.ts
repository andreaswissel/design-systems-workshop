import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss'],
})
export class FormLayoutComponent implements OnInit {
  @Input() columns = 1;

  constructor() {}

  ngOnInit(): void {}

  get templateColumnsString() {
    return `repeat(${this.columns}, 1fr)`;
  }
}

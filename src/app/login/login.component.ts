import { Component, EventEmitter, Output } from '@angular/core';
import { FormLayoutComponent } from '../form-layout/form-layout.component';
import { FormElementComponent } from '../form-element/form-element.component';
import { InputType } from '../input/input.component';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormLayoutComponent,
    FormElementComponent,
    CardComponent,
    ButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  InputType = InputType;

  @Output() onLogin: EventEmitter<any> = new EventEmitter();

  constructor(private loginService: LoginService) {}

  login(user: string, password: string) {
    this.loginService.login(user, password).subscribe((result) => {
      console.log(result);
      this.onLogin.emit(result);
    });
  }
}

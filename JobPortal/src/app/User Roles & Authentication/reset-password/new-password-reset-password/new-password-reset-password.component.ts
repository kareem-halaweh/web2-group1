import { Component } from '@angular/core';
import {ButtonComponent} from '../../shared components/button/button.component';
import {HeaderComponent} from '../../shared components/header/header.component';
import {InputComponent} from '../../shared components/input/input.component';
import {LabelComponent} from '../../shared components/label/label.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-new-password-reset-password',
  imports: [
    ButtonComponent,
    HeaderComponent,
    InputComponent,
    LabelComponent,
    RouterLink
  ],
  templateUrl: './new-password-reset-password.component.html',
  styleUrl: './new-password-reset-password.component.css'
})
export class NewPasswordResetPasswordComponent {
  submitted = false;

}

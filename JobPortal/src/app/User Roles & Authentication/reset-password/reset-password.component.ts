import { Component } from '@angular/core';
import {ButtonComponent} from '../shared components/button/button.component';
import {HeaderComponent} from '../shared components/header/header.component';
import {InputComponent} from '../shared components/input/input.component';
import {LabelComponent} from '../shared components/label/label.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [
    ButtonComponent,
    HeaderComponent,
    InputComponent,
    LabelComponent,
    RouterLink
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  submitted = false;

}

import { Component } from '@angular/core';
import {ButtonComponent} from '../../shared components/button/button.component';
import {HeaderComponent} from '../../shared components/header/header.component';
import {InputComponent} from '../../shared components/input/input.component';
import {LabelComponent} from '../../shared components/label/label.component';

@Component({
  selector: 'app-change-password-success',
  imports: [
    ButtonComponent,
    HeaderComponent,
    InputComponent,
    LabelComponent
  ],
  templateUrl: './change-password-success.component.html',
  styleUrl: './change-password-success.component.css'
})
export class ChangePasswordSuccessComponent {
  submitted = false;
}

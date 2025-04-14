import { Component } from '@angular/core';
import {HeaderComponent} from '../shared components/header/header.component';
import {LabelComponent} from '../shared components/label/label.component';
import {InputComponent} from '../shared components/input/input.component';
import {NgClass} from '@angular/common';
import {ButtonComponent} from '../shared components/button/button.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    LabelComponent,
    InputComponent,
    NgClass,
    ButtonComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submitted = false;




}

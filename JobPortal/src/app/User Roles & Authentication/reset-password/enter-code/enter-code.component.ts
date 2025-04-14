import { Component } from '@angular/core';
import {ButtonComponent} from '../../shared components/button/button.component';
import {HeaderComponent} from '../../shared components/header/header.component';
import {InputComponent} from '../../shared components/input/input.component';
import {LabelComponent} from '../../shared components/label/label.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-enter-code',
  imports: [
    ButtonComponent,
    HeaderComponent,
    InputComponent,
    LabelComponent,
    RouterLink
  ],
  templateUrl: './enter-code.component.html',
  styleUrl: './enter-code.component.css'
})
export class EnterCodeComponent {
  submitted = false;
}

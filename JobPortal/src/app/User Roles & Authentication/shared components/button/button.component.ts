import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() text: string = '';
  @Input() linkTo?: string;

  constructor(private router: Router) {}

  handleClick(event: Event) {
    console.log('Button clicked!');
    event.preventDefault(); // prevent form submission if inside a form
    if (this.type === 'button' && this.linkTo) {
      this.router.navigate([this.linkTo]);
    }
  }
}

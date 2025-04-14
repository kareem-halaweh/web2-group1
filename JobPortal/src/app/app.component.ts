import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JobCardComponent } from './job-card/job-card.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , JobCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobPortal';
}

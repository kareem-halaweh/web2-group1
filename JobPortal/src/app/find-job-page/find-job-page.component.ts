import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-find-job-page',
  imports: [HeaderComponent,JobCardComponent],
  templateUrl: './find-job-page.component.html',
  styleUrl: './find-job-page.component.css'
})
export class FindJobPageComponent {

}

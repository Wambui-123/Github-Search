import { Component } from '@angular/core';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  environment = environment
  constructor() {
    console.log(environment.production); // Logs false for default environment
  }
  title = 'git-search';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title!: string; /**added (!) definite assignment assertion to property**/

  upper() {
    this.title = this.title.toUpperCase();
  }
}

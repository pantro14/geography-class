import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geography-class';
  theme: string = 'dark';

  handleTheme(theme: string) {
    this.theme = theme;
  }
}

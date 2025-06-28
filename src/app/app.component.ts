import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainUIComponent } from './main-ui/main-ui.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainUIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Weatherer';
}

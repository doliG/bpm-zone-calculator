import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bpm-zone-calculator';
  fcmax = 0
  fcrest = 0
  Math = Math;
}

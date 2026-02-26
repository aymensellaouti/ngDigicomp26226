import { Component, signal } from '@angular/core';
import { First } from "./first/first.component";
import { Second } from './components/second/second.component';

@Component({
  selector: 'app-root',
  imports: [First,Second],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('ngDigicomp26226');
}

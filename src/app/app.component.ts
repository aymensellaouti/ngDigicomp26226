import { Component, signal } from '@angular/core';
import { First } from "./first/first.component";
import { Second } from './components/second/second.component';
import { Color } from "./components/color/color.component";
import { Two } from "./components/two/two.component";
import { RotatingCard } from "./components/rotating-card/rotating-card.component";
import { Counter } from "./signals/counter/counter.component";
import { FirstSignalComponent } from "./signals/first-signal/first-signal.component";

@Component({
  selector: 'app-root',
  imports: [Two, RotatingCard, Counter, FirstSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('ngDigicomp26226');
}

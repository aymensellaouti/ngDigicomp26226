import { Component, signal } from '@angular/core';
import { First } from "./first/first.component";
import { Second } from './components/second/second.component';
import { Color } from "./components/color/color.component";
import { Two } from "./components/two/two.component";
import { RotatingCard } from "./components/rotating-card/rotating-card.component";
import { Counter } from "./signals/counter/counter.component";
import { FirstSignalComponent } from "./signals/first-signal/first-signal.component";
import { TtcComponent } from "./signals/ttc/ttc.component";
import { Pere } from "./commInterComposants/pere/pere.component";
import { CvComponent } from "./cv/cv-component/cv-component.component";

@Component({
  selector: 'app-root',
  imports: [TtcComponent, First, FirstSignalComponent, Pere, CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {

}

import { Component } from '@angular/core';
import { First } from "./first/first.component";
import { FirstSignalComponent } from "./signals/first-signal/first-signal.component";
import { TtcComponent } from "./signals/ttc/ttc.component";
import { Pere } from "./commInterComposants/pere/pere.component";
import { CvComponent } from "./cv/cv-component/cv-component.component";
import { ExemplesStyle } from "./directives/exemples-style/exemples-style.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { Lampe } from "./directives/lampe/lampe.component";
import { TodoComponent } from "./todo/todo/todo.component";

@Component({
  selector: 'app-root',
  imports: [MiniWordComponent, Lampe, CvComponent, ExemplesStyle, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {

}

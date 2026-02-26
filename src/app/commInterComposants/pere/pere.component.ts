import { Component, signal } from '@angular/core';
import { Fils } from "../fils/fils.component";

@Component({
  selector: 'app-pere',
  imports: [Fils],
  templateUrl: './pere.component.html',
  styleUrl: './pere.component.css',
})
export class Pere {
  messageToSon = signal('cc fiston tu peux chercher le pain');
  processMessage(message: string) {
    alert(message);
  }
}

import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css',
})
export class Fils {
  messageOfDad = input('', {
    alias: 'message',
    // transform: (message) => 'cc ' + message
  });

  responseToDad = output<string>();
  reponse() {
    this.responseToDad.emit("J'ai pas envie j'ai la flemme :D")
  }
}

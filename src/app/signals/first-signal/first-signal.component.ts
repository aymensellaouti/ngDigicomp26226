import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-signal',
  templateUrl: './first-signal.component.html',
  styleUrl: './first-signal.component.css',
  imports: [FormsModule]
})
export class FirstSignalComponent {
  x = 5;
  y = 7;
  z = this.x + this.y;

  increment() {
    this.x++;
  }
  decrement() {
    this.x--;
  }
}

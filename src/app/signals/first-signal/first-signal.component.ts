import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-signal',
  templateUrl: './first-signal.component.html',
  styleUrl: './first-signal.component.css',
  imports: [FormsModule],
})
export class FirstSignalComponent {
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => this.z() * 2);
  names = signal(['jules', 'anas']);
  namesLength = computed(() => this.names().length);
  constructor() {
    effect(() => {
      console.log(this.names());
    })
  }
  addName() {
    this.names.update(
      (namesList) => ([...namesList, 'aymen'])
    )
  };

}

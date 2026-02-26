import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class Counter {
  counter = signal(0);
  constructor() {
  }
  increment() {
    this.counter.update(oldCounter => oldCounter + 1)
  }

  reset() {
    this.counter.set(0);
  }
}

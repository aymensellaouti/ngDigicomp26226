import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lampe',
  imports: [],
  templateUrl: './lampe.component.html',
  styleUrl: './lampe.component.css',
})
export class Lampe {
  //état
  isOn = signal(true);

  interrupteur() {
    this.isOn.update(state => !state)
  }
}

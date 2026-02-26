import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class Color {
  color = signal('red');

  changeColor(newColorInput: HTMLInputElement) {
    this.color.set(newColorInput.value);
    newColorInput.value = '';
  }

  reset() {
    this.color.set('red');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css',
})
export class Color {
  color = 'red';

  changeColor(newColorInput: HTMLInputElement) {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }

  reset() {
    this.color = 'red';
  }
}

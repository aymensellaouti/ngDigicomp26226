import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
  host: {
    '[style.color]':'this.color()',
    '(keyup)': 'this.onKeyup()'
  }
})
export class Rainbow {
  // état
  color = signal('black');
  constructor() {
    console.log('Rainbow');
  }
  onKeyup() {
    this.color.set(this.getRandomHexColor())
  }
  getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}

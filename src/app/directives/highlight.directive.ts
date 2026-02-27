import { Directive, HostBinding, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': 'this.bg()',
    '(mouseenter)': 'this.onMouseEnter()',
    '(mouseleave)': 'this.onMouseLeave()',
  },
})
export class Highlight {
  bg = signal('red');
  onMouseEnter() {
    this.bg.set('yellow');
  }
  onMouseLeave() {
    this.bg.set('red');
  }
}

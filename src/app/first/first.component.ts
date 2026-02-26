import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Second } from "../components/second/second.component";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class First {
  //cdr = inject(ChangeDetectorRef);
  name = 'anass';
  isHidden = false;
  message = '';
  constructor() {
    // setTimeout(() => {
    //   this.isHidden = true;
    //   this.cdr.detectChanges();
    // }, 2000)
  }

  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeName() {
    this.name = 'jules';
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}

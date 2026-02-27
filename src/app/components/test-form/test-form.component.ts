import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  imports: [FormsModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.css',
})
export class TestForm {
  process(myForm: NgForm) {
    console.log(myForm);
  }
}

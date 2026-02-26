import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rotating-card',
  imports: [FormsModule],
  templateUrl: './rotating-card.component.html',
  styleUrl: './rotating-card.component.css',
})
export class RotatingCard {
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Formateur';
  path = 'rotating_card_profile3.png';
}

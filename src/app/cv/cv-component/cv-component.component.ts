import { Component, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvList } from "../cv-list/cv-list.component";
import { CvCard } from "../cv-card/cv-card.component";

@Component({
  selector: 'app-cv-component',
  imports: [CvList, CvCard],
  templateUrl: './cv-component.component.html',
  styleUrl: './cv-component.component.css',
})
export class CvComponent {
  // state
  cvs = signal([
    new Cv(1, 'Guemara', 'jules', 'Bibliothècaire', '1234', 20, 'rotating_card_profile3.png'),
    new Cv(2, 'Khribech', 'Anass', 'Bibliothècaire', '1234', 20, 'rotating_card_profile2.png'),
  ]);

  selectedCv = signal<Cv | null>(null);
  updateSelectedCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}

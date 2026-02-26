import { Component, input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvItem } from "../cv-item/cv-item.component";

@Component({
  selector: 'app-cv-list',
  imports: [CvItem],
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css',
})
export class CvList {
  //état
  cvs = input<Cv[]>([]);
}

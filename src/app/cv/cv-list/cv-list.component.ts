import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvItem } from "../cv-item/cv-item.component";
import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-cv-list',
  // Le contexte de compilation du template
  imports: [CvItem],
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css',
})
export class CvList {
  //état
  cvs = input<Cv[]>([]);
}

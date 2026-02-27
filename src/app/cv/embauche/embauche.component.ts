import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { CvItem } from "../cv-item/cv-item.component";


@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
  imports: [CvItem],
})
export class EmbaucheComponent {
  embauches = inject(EmbaucheService).getEmbauchees();
}

import { Component, inject, input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-card',
  imports: [DefaultImagePipe],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css',
})
export class CvCard {
  //état
  cv = input<Cv | null>(null);
  toastr = inject(ToastrService);
  embaucheService =inject(EmbaucheService);
  embaucher() {
    const cv = this.cv();
    if (cv) {
      if (this.embaucheService.embaucher(cv)) {
        this.toastr.success(`${cv.name} a été embauché avec succès`);
      } else
      this.toastr.warning(`${cv.name} est déjà pré embauché`);
    }
  }
}

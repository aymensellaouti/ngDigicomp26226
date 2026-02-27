import { Component, inject, input, output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-item',
  imports: [DefaultImagePipe],
  templateUrl: './cv-item.component.html',
  styleUrl: './cv-item.component.css',
})
export class CvItem {
  cv = input.required<Cv>();
  size = input(50);
  cvService = inject(CvService);
  onSelectCv() {
    this.cvService.selectCv(this.cv());
  }
}

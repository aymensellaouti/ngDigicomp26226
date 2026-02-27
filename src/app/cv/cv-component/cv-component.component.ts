import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvList } from "../cv-list/cv-list.component";
import { CvCard } from "../cv-card/cv-card.component";
import { DatePipe, UpperCasePipe } from '@angular/common';
import { LoggerService } from '../../service/logger.service';
import { HelloService } from '../../service/hello.Service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";

@Component({
  selector: 'app-cv-component',
  imports: [CvList, CvCard, DatePipe, UpperCasePipe, EmbaucheComponent],
  templateUrl: './cv-component.component.html',
  styleUrl: './cv-component.component.css',
})
export class CvComponent {
  // state
  logger = inject(LoggerService);
  helloService = inject(HelloService);
  toastr = inject(ToastrService);
  cvService = inject(CvService);
  cvs = signal<Cv[]>([]);
  constructor() {
    this.logger.log('cc Cv Component');
    this.helloService.hello();
    this.toastr.info('cc Digicomp :)');
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs.set(cvs);
      },
      error: (e) => {
        this.toastr.error(`Les donnés sont fictives merci de contacter l'admin`)
        this.cvs.set(this.cvService.getFakeCvs()());
      }
    })
  }
  today = new Date();
  selectedCv = this.cvService.getSelectedCv();

}

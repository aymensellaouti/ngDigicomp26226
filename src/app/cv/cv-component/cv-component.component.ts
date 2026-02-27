import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvList } from "../cv-list/cv-list.component";
import { CvCard } from "../cv-card/cv-card.component";
import { DatePipe, UpperCasePipe } from '@angular/common';
import { LoggerService } from '../../service/logger.service';
import { HelloService } from '../../service/hello.Service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-component',
  imports: [CvList, CvCard, DatePipe, UpperCasePipe],
  templateUrl: './cv-component.component.html',
  styleUrl: './cv-component.component.css',
})
export class CvComponent {
  // state
  logger = inject(LoggerService);
  helloService = inject(HelloService);
  toastr = inject(ToastrService);
  cvs = signal([
    new Cv(1, 'Guemara', 'jules', 'Bibliothècaire', '1234', 20, 'rotating_card_profile3.png'),
    new Cv(2, 'Khribech', 'Anass', 'Bibliothècaire', '1234', 20, ''),
    new Cv(3, 'Sellaouti', 'Aymen', 'Bibliothècaire', '1234', 20, '            '),
  ]);
  constructor() {
    this.logger.log('cc Cv Component');
    this.helloService.hello();
    this.toastr.info('cc Digicomp :)')
  }
  today = new Date();
  selectedCv = signal<Cv | null>(null);
  updateSelectedCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}

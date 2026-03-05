import { Component, inject, Signal, signal } from "@angular/core";
import { Cv } from "../model/cv.model";
import { DefaultImagePipe } from "../../pipes/default-image.pipe";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "../../config/app-routes.config";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, EMPTY } from "rxjs";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  cv: Signal<Cv | null>;

  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cv = toSignal(this.cvService.getCvById(id).pipe(
      catchError(e => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    ), {
      initialValue: null
    });
    //this.cv.set(this.cvService.findCvById(id));
    //if(!this.cv()) this.router.navigate([APP_ROUTES.cv]);
    // this.cvService.getCvById(id).subscribe({
    //   next: cv => {this.cv.set(cv)},
    //   error: (e) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //   }
    // })
  }

  deleteCv() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCv(cv)
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}

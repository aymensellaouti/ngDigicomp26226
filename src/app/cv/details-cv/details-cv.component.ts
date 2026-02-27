import { Component, signal } from "@angular/core";
import { Cv } from "../model/cv.model";
import { DefaultImagePipe } from "../../pipes/default-image.pipe";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {
  cv = signal<Cv | null>(null);

  constructor() {}
}

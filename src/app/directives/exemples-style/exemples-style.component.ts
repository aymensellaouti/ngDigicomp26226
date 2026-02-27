import { Component, signal } from '@angular/core';
import { NgStyle } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-exemples-style',
  imports: [],
  templateUrl: './exemples-style.component.html',
  styleUrl: './exemples-style.component.css',
})
export class ExemplesStyle {
  color = signal('red')
}

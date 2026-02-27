import { Component, signal } from '@angular/core';
import { NgStyle } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { Highlight } from '../highlight.directive';
import { Rainbow } from '../rainbow.directive';

@Component({
  selector: 'app-exemples-style',
  imports: [Highlight, Rainbow],
  templateUrl: './exemples-style.component.html',
  styleUrl: './exemples-style.component.css',
})
export class ExemplesStyle {
  color = signal('red')
}

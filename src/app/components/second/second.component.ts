import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class Second {
  acr = inject(ActivatedRoute);
  monParam = this.acr.snapshot.params['monParam']
}

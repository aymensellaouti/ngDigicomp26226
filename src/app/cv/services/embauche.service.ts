import { Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  protected readonly embauchees = signal<Cv[]>([]);
  getEmbauchees(): Signal<Cv[]> {
    return this.embauchees.asReadonly();
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    if (!this.embauchees().includes(cv)) {
      // embuacher
      this.embauchees.update(embauchees => [...embauchees, cv])
      // returner ok
      return true;
    }
    return false;
  }
}

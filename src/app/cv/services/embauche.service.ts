import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {

  getEmbauchees(): Cv[] {
    return []
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    return false;
  }
}

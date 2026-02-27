import {  Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv.model';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  protected readonly cvs = signal<Cv[]>([
    new Cv(1, 'Guemara', 'jules', 'Bibliothècaire', '1234', 20, 'rotating_card_profile3.png'),
    new Cv(2, 'Khribech', 'Anass', 'Bibliothècaire', '1234', 20, ''),
    new Cv(3, 'Sellaouti', 'Aymen', 'Bibliothècaire', '1234', 20, '            '),
  ]);

  protected readonly selectedCv = signal<Cv | null>(null);
  /**
   * Retourne la liste des cvs
   * @returns Signal<Cv[]>
   */
  getCvs(): Signal<Cv[]> {
    return this.cvs.asReadonly();
  }
  /**
   * Retourne le selectedCv
   * @returns Signal<CV>
   */
  getSelectedCv(): Signal<Cv | null> {
    return this.selectedCv.asReadonly();
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }

  selectCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}

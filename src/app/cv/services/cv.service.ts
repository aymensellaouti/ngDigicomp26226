import {  inject, Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  http = inject(HttpClient);
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
  getFakeCvs(): Signal<Cv[]> {
    return this.cvs.asReadonly();
  }
  /**
   * Retourne la liste des cvs
   * @returns Signal<Cv[]>
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
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
    return this.cvs().find(cv => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const oldTodosLength = this.cvs().length;
    this.cvs.update((cvs) => {
      return cvs.filter((actualCv) => actualCv != cv);
    });
    return oldTodosLength != this.cvs().length;
  }

  selectCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}

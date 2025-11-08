import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Norma } from '../models/norma.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private base = 'assets/data';

  constructor(private http: HttpClient) {}

  getNormas(): Observable<Norma[]> {
    return this.http.get<Norma[]>(`${this.base}/normas.json`);
  }

  // Más getters: getModelos(), getEstandares(), getPruebas(), etc.
}

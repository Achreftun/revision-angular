import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personne } from 'src/app/interfaces/personne';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class PersonneService {
  private url = 'http://localhost:8000/api/personnes';


  constructor(private http: HttpClient) {

  }


  getAllPersonnes() {
    return this.http.get<Array<Personne>>(this.url).pipe(map(elt => elt['hydra:member']));
  }
  getPersonne(id: number) {
    return this.http.get<Personne>(this.url + '/' + id);
  }
  addPersonne(personne: Personne) {
    return this.http.post(this.url, personne);
  }
  editPersonne(personne: Personne) {
    return this.http.put(this.url + '/' + personne.id, personne);
  }
  deletePersonne(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class AdresseService {

  private url = 'http://localhost:8000/api/adresses';

  constructor(private http: HttpClient) { }

  deleteAdresse(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}

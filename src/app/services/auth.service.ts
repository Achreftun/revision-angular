import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8000/authentication_token';
  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post(this.url, user);
  }
}

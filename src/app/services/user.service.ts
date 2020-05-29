import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8000/api/users';
  constructor(private http: HttpClient) { }

  getCurrentUser(user: User) {
    return this.http.get<Array<User>>(this.url + '?email=' + user.email).pipe(map(elt => elt['hydra:member']));
  }
  getUser(id: number) {
    return this.http.get<User>(this.url + '/' + id);
  }
  addUser(user: User) {
    return this.http.post(this.url, user);
  }
  editUser(user: User) {
    return this.http.put(this.url + '/' + user.id, user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}

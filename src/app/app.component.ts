import { Component } from '@angular/core';
import { Personne } from './interfaces/personne';
import { Router } from '@angular/router';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'revision-angular';
  user: User;
  constructor(private router: Router) { }
  getToken() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user != null ? true : false;
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}

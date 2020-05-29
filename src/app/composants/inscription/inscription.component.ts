import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: User = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  inscription() {
    this.userService.addUser(this.user).subscribe(res => {
        this.router.navigateByUrl('/login');
    });
  }
}

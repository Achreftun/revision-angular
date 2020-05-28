import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {
  msg: string;
  messages = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.accederMessageFirst().subscribe(
      msg => this.messages.push(msg)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  ajouterMessage() {
    this.messageService.envoyerMessageSecond(this.msg);
    this.msg = '';
  }
}

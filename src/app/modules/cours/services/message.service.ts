import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject1 = new Subject<string>();
  private subject2 = new Subject<string>();
  constructor() { }

  envoyerMessageFirst(msg: string) {
    this.subject1.next(msg);
  }
  accederMessageFirst() {
    return this.subject1;
  }
  envoyerMessageSecond(msg: string) {
    this.subject2.next(msg);
  }
  accederMessageSecond() {
    return this.subject2;
  }
}

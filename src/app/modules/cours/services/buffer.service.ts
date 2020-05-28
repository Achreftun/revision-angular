import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BufferService {

  private subject = new Subject();
  constructor() { }

  envoyerMessageFirst(objet) {
    this.subject.next(objet);
  }
  accederMessageFirst() {
    return this.subject;
  }

}

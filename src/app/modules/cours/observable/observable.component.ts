import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Observer, interval, Subscription, timer, merge, Subject, from, BehaviorSubject, ReplaySubject } from 'rxjs';
import { take, map, filter, count, max } from 'rxjs/operators';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  tab: Array<number> = [];
  status = '';
  constructor() { }
  subscription: Subscription;
  ngOnInit() {
    const subject = new ReplaySubject(2);
    subject.subscribe({
      next: (value) => console.log(`A : ${value}`)
    });
    subject.next(1);
    subject.next(2);
    subject.subscribe({
      next: (value) => console.log(`B : ${value}`)
    });
    subject.next(3);
  }
}



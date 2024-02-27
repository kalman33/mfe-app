import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  itemCount: number;

  constructor() {
    this.itemCount = 0;
  }

  decrement() {
    this.itemCount--;
  }

  increment() {
    this.itemCount++;
  }

}

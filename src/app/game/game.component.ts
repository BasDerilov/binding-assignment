import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  odds: number[] = [];
  evens: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  logEmit(num: number) {
    console.log(num);
  }

  tick(num: number) {
    if (num % 2 !== 0) {
      this.odds.push(num);
    } else {
      this.evens.push(num);
    }
  }

  clear() {
    this.odds = [];
    this.evens = [];
  }
}

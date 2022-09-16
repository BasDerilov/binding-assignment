import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  interval: number = 1000;
  timer: number = 0;
  timerID: number = 0;

  @Output() clear: EventEmitter<void> = new EventEmitter();
  @Output() tick: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  start() {
    if (this.timerID === 0) {
      this.timerID = window.setInterval(() => {
        this.timer++;
        this.tick.emit(this.timer);
      }, this.interval);
    }
  }

  stop() {
    clearInterval(this.timerID);
    this.timerID = 0;
    this.timer = 0;
  }

  emitClear() {
    this.clear.emit();
  }
}

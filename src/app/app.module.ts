import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game/game-control/game-control.component';

import { GameComponent } from './game/game.component';
import { NumberComponent } from './game/number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    GameComponent,
    NumberComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

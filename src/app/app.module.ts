import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/heroes/hero.component';
import { Routing } from './app.routes';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroComponent],
  imports: [BrowserModule, FormsModule, HttpModule, Routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

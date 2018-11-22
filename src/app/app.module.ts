import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProtectedComponent } from './components/protected/protected.component';

import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AboutComponent, ProtectedComponent],
  imports: [BrowserModule, AppRouting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

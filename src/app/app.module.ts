import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SafeDomPipe } from './pipes/safe-dom.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [AppComponent, CapitalizePipe, SafeDomPipe, PasswordPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [AppComponent, TemplateFormsComponent, ReactiveFormsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

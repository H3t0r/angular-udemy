import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ScopedStylesComponent } from './components/scoped-styles/scoped-styles.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MiscComponent } from './components/misc/misc.component';
import { ParentComponent } from './components/parent/parent.component';

import { AppRouting } from './app.routes';
import { DetailsComponent } from './components/details/details.component';
import { WebsiteComponent } from './components/website/website.component';
import { EmailsComponent } from './components/emails/emails.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ScopedStylesComponent,
    NgClassComponent,
    HighlightDirective,
    MiscComponent,
    ParentComponent,
    DetailsComponent,
    WebsiteComponent,
    EmailsComponent,
  ],
  imports: [BrowserModule, AppRouting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

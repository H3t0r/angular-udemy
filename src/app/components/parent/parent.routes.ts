import { Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { WebsiteComponent } from '../website/website.component';
import { EmailsComponent } from '../emails/emails.component';

export const ParentRoutes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'emails', component: EmailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'details' },
];

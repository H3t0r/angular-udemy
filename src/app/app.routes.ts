import { Routes, RouterModule } from '@angular/router';

import { ParentRoutes } from './components/parent/parent.routes';

import { MiscComponent } from './components/misc/misc.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: 'misc', component: MiscComponent },
  {
    path: 'parent',
    component: ParentComponent,
    children: ParentRoutes,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'misc' },
];

export const AppRouting = RouterModule.forRoot(routes);

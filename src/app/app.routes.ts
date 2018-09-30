import { Routes } from '@angular/router';

import { MainComponent } from './containers/main/main.container';

export const routes: Routes = [
  { path: 'contact', loadChildren: './containers/contact/contact.module#ContactModule' },
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '/' }
];

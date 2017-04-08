import { Routes } from '@angular/router';

import { ContactComponent } from './containers/contact/contact.container';
import { MainComponent } from './containers/main/main.container';

export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '/' }
];

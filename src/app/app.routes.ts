import { Routes } from '@angular/router';

import { ContactComponent } from './containers/contact/contact.container';
import { MainComponent } from './containers/main/main.container';
import { PageComponent } from './containers/page/page.container';

export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'page:id', component: PageComponent },
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '/' }
];

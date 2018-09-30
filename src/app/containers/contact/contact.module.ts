import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LibraryModule } from '../../components/library.module';
import { ContactComponent } from './contact.container';

const routes = [
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ CommonModule, FormsModule, LibraryModule, RouterModule.forChild(routes) ],
  declarations: [ ContactComponent ],
  exports: [ ContactComponent ]
})
export class ContactModule { }

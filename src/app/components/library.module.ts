import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BandcampComponent } from './bandcamp/bandcamp.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { MediaComponent } from './media/media.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';

export const components = [
  BandcampComponent,
  FooterComponent,
  HeaderComponent,
  ItemComponent,
  MediaComponent,
  NewsletterComponent,
  TextComponent,
  VideoComponent
];

@NgModule({
  imports: [ CommonModule, FormsModule, RouterModule ],
  exports: [ ...components ],
  declarations: [ ...components ],
})
export class LibraryModule { }

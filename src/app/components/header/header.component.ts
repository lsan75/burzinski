import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ImageLoaderService } from 'app/services/image-loader/image-loarder.service';

@Component({
  selector: 'bz-header',
  templateUrl: './header.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() img: string;
  @Input() title: string;
  @Input() subtitle: string;

  public imgStyle;
  private unload;

  constructor(private imgLoader: ImageLoaderService) {}

  ngOnInit() {
    if (!this.img) { return; }

    this.unload = this.imgLoader.load(this.img).subscribe((response: boolean) => {
      if (!response) return;
      this.imgStyle = {
        'background-image': `url(${this.img})`
      };
    });
  }

  ngOnDestroy() {
    this.unload.unsubscribe();
  }
}

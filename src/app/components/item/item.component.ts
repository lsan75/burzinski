import {
  Component, EventEmitter, Input, Output, OnInit, OnDestroy
} from '@angular/core';
import { IItem } from '../../store/main/main';
import { ImageLoaderService } from 'app/services/image-loader/image-loarder.service';

@Component({
  selector: 'bz-item',
  templateUrl: './item.html'
})
export class ItemComponent implements OnInit, OnDestroy {
  public imgStyle;
  private unload;

  @Input() item = <IItem>null;
  @Output() openMedia = new EventEmitter();

  constructor(private imgLoader: ImageLoaderService) {}

  ngOnInit() {
    if (!this.item.img) { return; }

    this.unload = this.imgLoader.load(this.item.img).subscribe((response: boolean) => {
      if (!response) return;
      this.imgStyle = {
        'background-image': `url(${this.item.img})`
      };
    })
  }

  ngOnDestroy() {
    this.unload.unsubscribe();
  }

  open = (item: IItem) => {
    if (!item.source) { return; }
    this.openMedia.emit(item);
  }
}

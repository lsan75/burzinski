import {
  Component, ChangeDetectionStrategy, EventEmitter, Input, Output, OnChanges
} from '@angular/core';
import { IItem } from '../../store/main/main';

@Component({
  selector: 'bz-item',
  templateUrl: './item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnChanges {
  public imgStyle;
  @Input() item = <IItem>null;
  @Output() openMedia = new EventEmitter();

  ngOnChanges() {
    if (!this.item.img) { return; }
    this.imgStyle = {
      'background-image': `url(${this.item.img})`
    };
  }

  open = (item: IItem) => {
    if (!item.source) { return; }
    this.openMedia.emit(item);
  }
}

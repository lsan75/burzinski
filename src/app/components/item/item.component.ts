import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { IItem } from '../../store/main/main';

@Component({
  selector: 'bz-item',
  templateUrl: './item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnChanges {
  public imgStyle;
  @Input() item = <IItem>null;

  ngOnChanges() {
    if (!this.item.img) { return; }
    this.imgStyle = {
      'background-image': `url(${this.item.img})`
    };
  }
}

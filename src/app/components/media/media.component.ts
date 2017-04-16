import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IItem } from '../../store/main/main';

@Component({
  selector: 'bz-media',
  templateUrl: './media.html',
  styleUrls: ['./media.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaComponent {

  @Input() opened: boolean;
  @Input() item = <IItem>null;

  @Output() closeMedia = new EventEmitter();

  close = () => {
    this.closeMedia.emit();
  }
}

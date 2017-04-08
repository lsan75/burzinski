import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IItem } from '../../store/main/main';

@Component({
  selector: 'bz-text',
  templateUrl: './text.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent {
  @Input() item = <IItem>null;
}

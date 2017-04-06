import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bz-item',
  templateUrl: './item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  constructor() { }
}

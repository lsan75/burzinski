import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bz-text',
  templateUrl: './text.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent {
  constructor() { }
}

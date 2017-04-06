import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bz-header',
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() img: string;
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

}

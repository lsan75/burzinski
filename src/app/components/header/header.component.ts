import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bz-header',
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnChanges {

  @Input() img: string;
  @Input() title: string;
  @Input() subtitle: string;

  public imgStyle;

  constructor() { }

  ngOnChanges() {
    if (!this.img) { return; }
    this.imgStyle = {
      'background-image': `url(${this.img})`
    };
  }
}

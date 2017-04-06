import { Component, Input } from '@angular/core';

@Component({
  selector: 'bz-header',
  templateUrl: './header.html'
})
export class HeaderComponent {

  @Input() img: string;
  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

}

import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bz-bandcamp',
  templateUrl: './bandcamp.html',
  styleUrls: ['./bandcamp.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BandcampComponent implements OnInit {
  @Input() source;
  @Input() target;
  @Input() title;
  @Input() type;
  src;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://bandcamp.com/EmbeddedPlayer/${this.type}=${this.source}/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/`
    );
  }
}

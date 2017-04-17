import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bz-video',
  templateUrl: './video.html',
  styleUrls: ['./video.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent {
  @Input() source: string;

  constructor(public sanitizer: DomSanitizer) {}
}

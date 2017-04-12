import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bz-video',
  templateUrl: './video.html',
  styleUrls: ['./video.less']
})
export class VideoComponent {
  @Input() source: string;

  constructor(private sanitizer: DomSanitizer) {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ImageLoaderService {
  load = imgSrc => {
    const obs = new BehaviorSubject<boolean>(false)
    const img = new Image()
    img.src = imgSrc
    img.onload = () => {
      obs.next(true)
    }
    return obs
  }
}
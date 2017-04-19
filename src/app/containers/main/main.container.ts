import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';
import { IItem } from '../../store/main/main';
import { getData } from '../../store/main/main.queries';
import { getMediaOpened, getMediaItem} from '../../store/media/media.queries';
import { MediaActions } from '../../store/media/media.actions';

@Component({
  selector: 'bz-main',
  templateUrl: './main.html'
})
export class MainComponent {
  @select(getData) list: Observable<IItem[]>;

  @select(getMediaOpened) opened: Observable<boolean>;
  @select(getMediaItem) selectedItem: Observable<IItem>;

  constructor(
    private mediaActions: MediaActions
  ) {}

  openMedia = (item: IItem) => {
    this.mediaActions.open(item);
  }

  closeMedia = () => {
    this.mediaActions.close();
  }
}

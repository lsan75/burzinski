import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';
import { IHeader } from '../../store/main/main';
import { getHeader } from '../../store/main/main.queries';

@Component({
  selector: 'bz-contact',
  templateUrl: './contact.html'
})
export class ContactComponent {
  @select(getHeader) header: Observable<IHeader>;
}

/*
 * Testing MainActions
 */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainActions, MAIN } from './main.actions';
import { DataService } from '../../services/data/data.service';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Rx';

describe('MainActions', () => {
  let actions;
  const spyDataService = jasmine.createSpyObj('spyDataService', ['getData']);
  const spyStore = jasmine.createSpyObj('spyStore', ['dispatch']);

  spyDataService.getData.and.returnValue(Observable.of(['data']));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MainActions,
        {
          provide: DataService,
          useValue: spyDataService
        },
        {
          provide: NgRedux,
          useValue: spyStore
        }
      ]
    });
  });

  beforeEach(inject([MainActions], (_actions: MainActions) => {
    actions = _actions;
  }));

  it('should fetch data', () => {
    actions.fetchData();

    expect(spyDataService.getData).toHaveBeenCalled();
    expect(spyStore.dispatch).toHaveBeenCalledWith({
      type: MAIN.DATA_FETCH,
      list: ['data']
    });
  });

});

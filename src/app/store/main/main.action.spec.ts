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
  const spyDataService = jasmine.createSpyObj('spyDataService', ['getData', 'getHeader']);
  const spyStore = jasmine.createSpyObj('spyStore', ['dispatch']);

  spyDataService.getData.and.returnValue(Observable.of(['data']));
  spyDataService.getHeader.and.returnValue(Observable.of(['header']));

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

  it('should fetch header', () => {
    actions.fetchHeader();

    expect(spyDataService.getHeader).toHaveBeenCalled();
    expect(spyStore.dispatch).toHaveBeenCalledWith({
      type: MAIN.HEADER_FETCH,
      header: ['header']
    });
  });

});

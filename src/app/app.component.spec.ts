import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainActions } from './store/main/main.actions';



describe('AppComponent', () => {

  const spyActions = jasmine.createSpyObj('spyActions', ['fetchData']);
  let fixture, comp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: MainActions,
          useValue: spyActions
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
  });

  it('should get datas', () => {
    fixture.detectChanges();
    expect(spyActions.fetchData).toHaveBeenCalled();
  });
});

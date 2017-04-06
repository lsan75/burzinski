import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { environment } from '../environments/environment';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, actions, defaultState } from './store';
import { rootReducer } from './store/root.reducer';

import { AppComponent } from './app.component';
import { components } from './components';
import { containers } from './containers';

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...containers
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DevToolsExtension, ...actions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    public ngRedux: NgRedux<IAppState>,
    public devTool: DevToolsExtension
  ) {

    const enhancers = [];
    if (!environment.production) {
      enhancers.push( devTool.isEnabled() ? devTool.enhancer() : (f) => f );
    }

    ngRedux.configureStore(
      rootReducer,
      defaultState,
      [],
      enhancers
    );
  };
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { ContactModule } from './containers/contact/contact.module';
import { LibraryModule } from './components/library.module';

import { environment } from '../environments/environment';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, actions, defaultState } from './store';
import { rootReducer } from './store/root.reducer';

import { AppComponent } from './app.component';
import { containers } from './containers';
import { services } from './services';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ...containers
  ],
  imports: [
    BrowserModule,
    ContactModule,
    FormsModule,
    HttpClientModule,
    LibraryModule,
    NgReduxModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [ LibraryModule ],
  providers: [
    DevToolsExtension,
    ...actions,
    ...services
  ],
  bootstrap: [ AppComponent ]
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

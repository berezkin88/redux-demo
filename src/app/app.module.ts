import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from 'ng2-redux';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { fromJS, Map } from 'immutable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<Map<string, any>>) {
    ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }
}

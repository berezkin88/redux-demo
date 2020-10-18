import { INCREMENT } from './actions';
import { IAppState } from './store';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'redux-demo';
  counter = 0;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
    ngRedux.subscribe(() => {
      let store = ngRedux.getState();
      this.counter = store.get('counter');
    });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}

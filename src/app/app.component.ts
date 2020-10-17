import { INCREMENT } from './actions';
import { IAppState } from './store';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'redux-demo';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      let store = ngRedux.getState();
      this.counter = store.counter;
    })
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}

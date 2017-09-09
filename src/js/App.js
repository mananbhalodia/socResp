import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import ReactDOM from "react-dom"
import store from './redux/Store';
import Rbootstrap from 'react-bootstrap';

//import components
import Main from './components/Main';

//import styles scss
import styles from '../scss/styles.scss';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </Router>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));

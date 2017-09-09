import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import ReactDOM from "react-dom"
import store from './redux/Store';
import * as firebase from 'firebase';
import Rbootstrap from 'react-bootstrap';

//import components
import Main from './components/Main';

//import styles scss
import styles from '../scss/styles.scss';

var config = {
    apiKey: "AIzaSyA_b_DylIRjlSHQAmNaccg0ZMcgPp00QFQ",
    authDomain: "socresp-c2a44.firebaseapp.com",
    databaseURL: "https://socresp-c2a44.firebaseio.com",
    projectId: "socresp-c2a44",
    storageBucket: "socresp-c2a44.appspot.com",
    messagingSenderId: "420921585679"
  };
  firebase.initializeApp(config);

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

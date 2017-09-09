import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import ReactDOM from "react-dom"
import store from './redux/Store';
import * as firebase from 'firebase';
import Rbootstrap from 'react-bootstrap';

const Tags = props => {
 return (
    <a> Hello </a>
  )
};

export default Tags;


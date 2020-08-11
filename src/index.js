import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { HashRouter } from 'react-router-dom'
import './assets/js/rem'
import { Provider } from "react-redux"
import store from "./store"
Component.prototype.$img = 'http://localhost:3000'
ReactDOM.render(

   <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  ,

  document.getElementById('root')
);

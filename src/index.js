import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

//리덕스
import { createStore } from 'redux';
import reducers from "./reducers";
import { Provider } from "react-redux";

//스토어
const store = createStore(reducers);


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, document.getElementById('root')
);
serviceWorker.register();

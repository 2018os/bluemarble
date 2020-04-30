import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import App from './App';
import * as serviceWorker from './serviceWorker';

//리덕스
import { createStore } from 'redux';
import reducers from "./reducers";
import { Provider } from "react-redux";

import './include/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//스토어
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// ReactDOM.render(
//   <Provider store = {store}>
//     <Root />
//   </Provider>, document.getElementById('root')
// );


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.register();

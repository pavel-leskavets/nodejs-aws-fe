import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';
import {BAD_REQUEST, UNAUTHORIZED, FORBIDDEN} from 'http-status-codes';

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    const responseStatus = error.response.status;
    if (responseStatus === BAD_REQUEST) {
      alert(error.response.data?.data);
    }
    if (responseStatus === UNAUTHORIZED || responseStatus === FORBIDDEN) {
      alert(error.response.data.message);
    }
    return Promise.reject(error.response);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router} from "react-router";
import configureStore from './store/configureStore';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from "./data/Routers/BrowserRouter";
import { Auth0Provider } from "@auth0/auth0-react";


// Create browser history to use in the Redux store
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = BrowserRouter.history;

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
    <Auth0Provider
    domain="realty-streem.us.auth0.com"
    clientId="ZRoTfzIfjfOrbPYRGpXcBVw1brevOK9i"
    redirectUri={window.location.origin}
    audience="https://app.realtystreem.com"
    scope=""
  >
    <Provider store={store}>
        <Router history={BrowserRouter.history}>
            <App />
        </Router>
    </Provider>
  </Auth0Provider>,
    document.getElementById('root'));

registerServiceWorker();

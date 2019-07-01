import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SVGAnimation from './animation/SVGAnimation';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import store from './animation/redux/store';
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <SVGAnimation />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


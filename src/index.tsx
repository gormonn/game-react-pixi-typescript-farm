import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { RootStore } from './store/rootStore'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

render(
    <Provider rootStore={new RootStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

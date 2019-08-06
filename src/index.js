import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import {todoApp} from './reducers';

import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    todoApp, 
    applyMiddleware(sagaMiddleWare)
    );

sagaMiddleWare.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

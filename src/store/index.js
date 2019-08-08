import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas/sagas';

console.log(rootReducer)

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
    );

sagaMiddleWare.run(rootSaga);

export default store;
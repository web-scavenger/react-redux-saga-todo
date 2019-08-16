import { all } from 'redux-saga/effects'

import { onAddFetchedDataAsync } from './fetchData';
import { onSubmitInput } from './submitInput'

export default function* rootSaga(){
    yield all([
        onAddFetchedDataAsync(),
        onSubmitInput()
    ])
}
import { put, takeEvery } from 'redux-saga/effects'
import { 
    CLEAR_INPUT,
    ON_SUBMIT_INPUT,
    ADD_TODO
 } from '../actions/actions'

export function* submitInput(action){
    const { title } = action;

    yield put({type: ADD_TODO, title});

    yield put({type: CLEAR_INPUT})
}

export function* onSubmitInput(){
    yield takeEvery(ON_SUBMIT_INPUT, submitInput)
}
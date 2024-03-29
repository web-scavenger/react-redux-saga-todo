import { put, call , takeLatest } from 'redux-saga/effects'
import { 
    INIT_DATA_SUCCESS, 
    GET_INIT_DATA_ASYNC,
    INIT_DATA_ERROR,
 } from '../actions/actions'

import { DATA_URL } from '../constants'

const fetchData = async (url) => {
    const response = await fetch(url);

    return new Promise( async (resolve, reject) => {
        if(response.ok){
            const json = await response.json();
            resolve(json)
        } 
        reject(response.status)
        
    })
}

export function* addInitialData(){
    try{
        const data = yield call(fetchData, DATA_URL)

        yield put({type: INIT_DATA_SUCCESS, data})

    } catch (error){
        console.log(error)
        const message = 'Data is undefind'
        yield put({type: INIT_DATA_ERROR, message})
    }
}

export function* onAddFetchedDataAsync(){
    yield takeLatest(GET_INIT_DATA_ASYNC, addInitialData)
}
import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { 
    ADD_TODO_ASYNC, 
    ADD_TODO, 
    INIT_DATA_SUCCESS, 
    GET_INIT_DATA_ASYNC,
    INIT_DATA_ERROR,
 } from '../actions/actions'

const url = 'https://jsonplaceholder.typicode.com/todos'


const delay = (ms) => new Promise(res => setTimeout(res, ms));

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

// export function* addTodo(action) {
//     const { title } = action
//     yield call(delay, 500);
//     yield put({type: ADD_TODO, title})
// }

// export function* onAddTodoAsync() {
//     yield takeEvery(ADD_TODO_ASYNC, addTodo)
// }

export function* addInitialData(){
    try{

        const data = yield call(fetchData, url)

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

export default function* rootSaga(){
    yield all([
        // onAddTodoAsync(), 
        onAddFetchedDataAsync()
    ])
}
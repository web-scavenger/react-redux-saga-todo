export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
export const GET_INIT_DATA_ASYNC = 'GET_INIT_DATA_ASYNC';
export const INIT_DATA_SUCCESS = 'INIT_DATA_SUCCESS';
export const INIT_DATA_ERROR = 'INIT_DATA_ERROR';

export const ON_SUBMIT_INPUT = 'ON_SUBMIT_INPUT';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

export const addInitFetchedData = (data) => {
    return {
        type: INIT_DATA_SUCCESS,
        data
    }
} 

export const addTodo = (text) => {
    return{
        type: ADD_TODO,
        text
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
};

export const setVisibilityFilter = (filter) =>{
    return { type: SET_VISIBILITY_FILTER, filter }
}

export const updateInput = (text) => {
    return {
        type: UPDATE_INPUT,
        text
    }
}

export const clearInput = () => ({type: CLEAR_INPUT})


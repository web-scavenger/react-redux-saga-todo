import { combineReducers } from 'redux';

import { 
    ADD_TODO, TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters, 
    INIT_DATA_SUCCESS, 
    INIT_DATA_ERROR
} from './actions';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
    error: null
  }

export const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case INIT_DATA_SUCCESS: 
            return{
                ...state,
                todos: [
                    ...state.todos,
                    ...action.data
                ]
            }
        case INIT_DATA_ERROR:
            return{
                ...state,
                error: action.message
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {   
                        userId: 1,
                        id: Date.now().toString(),
                        title: action.title,
                        completed: false
                    }
                ]
            };
        case SET_VISIBILITY_FILTER:
            return{
                ...state,
                visibilityFilter: action.filter
            };
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, index) => {
                    if(action.id === index){
                        return{
                            ...todo,
                            completed: !todo.completed 
                        }
                    }
                })
            }
        default:
            return state;

    }
}



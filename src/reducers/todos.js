import {
    ADD_TODO,
    TOGGLE_TODO,
    INIT_DATA_SUCCESS
} from '../actions/actions';


export const initialTodoState = {
    todos: []
};

export const todos = (state = initialTodoState.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    userId: 1,
                    id: Date.now().toString(),
                    title: action.title,
                    completed: false
                }
            ]
        case INIT_DATA_SUCCESS:
            return [
                ...state,
                ...action.data
            ]
        case TOGGLE_TODO:
            return [
                state.map((todo, index) => {
                    if (action.id === index) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                })
            ]
        default: {
            return state
        }
    }
};

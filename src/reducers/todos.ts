import {
  ADD_TODO,
  TOGGLE_TODO,
  INIT_DATA_SUCCESS,
  REMOVE_TODO,
} from '../actions/actions';


export interface TodoState {
  userId: number
  id: number | string
  title: string 
  completed: boolean
}

export interface TodoAction {
  type: string
  data?: TodoState[]
  id?: number | string
  title?: string 
}


const initialState: TodoState[] = []

export const todos = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          userId: 1,
          id: Date.now().toString(),
          title: action.title,
          completed: false,
        },
      ];
    case INIT_DATA_SUCCESS:
      return [
        ...state,
        ...action.data,
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (action.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default: {
      return state;
    }
  }
};

import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import { addTodo } from './todo.actions';

export const initialState: AppState = {
  toDos: [],
};

export const TodoReducer = createReducer(
  initialState,
  on(addTodo, (state: AppState, { toDo }) => {
    return { ...state, toDos: [...state.toDos, toDo] };
  })
);

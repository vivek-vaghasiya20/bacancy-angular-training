import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import {
  addTodo,
  deleteTodo,
  deleteTodoSuccess,
  getTodoListSuccess,
  updateTodo,
} from './todo.actions';

export const initialState: AppState = {
  toDos: [],
};

export const TodoReducer = createReducer(
  initialState,
  on(getTodoListSuccess, (state: AppState, { toDos }) => ({
    ...state,
    toDos,
  })),
  on(addTodo, (state: AppState, { toDo }) => {
    return { ...state, toDos: [...state.toDos, toDo] };
  }),
  on(updateTodo, (state: AppState, { toDo }) => ({
    ...state,
    toDos: state.toDos.map((s) => (s.id === toDo.id ? toDo : s)),
  })),

  on(deleteTodo, (state: AppState, { id }) => ({
    ...state,
  })),
  on(deleteTodoSuccess, (state: AppState, { id }) => ({
    ...state,
    toDos: state.toDos.filter((s) => s.id !== id),
  }))
);

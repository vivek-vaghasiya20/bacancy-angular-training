import { createAction, props } from '@ngrx/store';
import { Todo } from '../modal/todo.modal';

export const getTodoList = createAction('[Todo] get TodoList');
export const getTodoListSuccess = createAction(
  '[Todo] get TodoList Data Success',
  props<{ toDos: Todo[] }>()
);
export const getTodoListFailure = createAction(
  '[Todo] get TodoList Data Failure'
);
export const addTodo = createAction('[Todo] Add Todo', props<{ toDo: Todo }>());
export const updateTodo = createAction(
  '[Todo] update Todo',
  props<{ toDo: Todo }>()
);
export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: number }>()
);
export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo',
  props<{ id: number }>()
);
export const deleteTodoFailure = createAction('[Todo] Delete Todo Failure');

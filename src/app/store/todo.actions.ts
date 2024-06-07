import { createAction, props } from '@ngrx/store';
import { Todo } from '../modal/todo.modal';

export const getTodoSuccess = createAction(
  '[Todo] get Data Success',
  props<{ toDos: Todo[] }>()
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

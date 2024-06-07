import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToDoService } from '../services/to-do.service';
import { getTodoSuccess } from './todo.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from '../modal/todo.modal';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoEffects {
  constructor(private todoService: ToDoService, private actions$: Actions) {}

  loadToDos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodoSuccess),
      switchMap(() =>
        this.todoService.getAllTodo().pipe(
          map((response: Todo[]) =>
            response.map((todo: Todo) => ({
              id: todo.id,
              todo: todo.todo,
              completed: todo.completed,
              userId: todo.userId,
            }))
          ),
          map((toDos: Todo[]) => {
            console.log(toDos);
            return getTodoSuccess({ toDos });
          }),
          catchError(() => of({ type: '[Todo] Get Data Failure' }))
        )
      )
    )
  );
}

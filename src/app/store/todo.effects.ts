import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Todo } from '../modal/todo.modal';
import { ToDoService } from '../services/to-do.service';
import {
  deleteTodo,
  deleteTodoFailure,
  deleteTodoSuccess,
  getTodoList,
  getTodoListFailure,
  getTodoListSuccess,
} from './todo.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoEffects {
  constructor(private todoService: ToDoService, private actions$: Actions) {}

  loadToDos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodoList),
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
            return getTodoListSuccess({ toDos });
          }),
          catchError(() => of(getTodoListFailure()))
        )
      )
    )
  );

  // deleteToDo$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(deleteTodo),
  //     switchMap((action) =>
  //       this._http.delete<Todo>(`${this.apiURL}/${action.id}`).pipe(
  //         tap((res) => console.log(res, 'delete effect')),
  //         map((res: any) => {
  //           console.log(res);
  //           return deleteTodoFailure();
  //         })
  //       )
  //     )
  //   )
  // );
}

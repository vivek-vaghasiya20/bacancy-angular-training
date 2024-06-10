import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../modal/todo.modal';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private apiURL: string = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  public getAllTodo(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.apiURL)
      .pipe(map((res: any) => res.todos));
  }

  // public createTodo() {}

  // public updateTodo() {}

  public deleteTodo(index: number) {
    return this.http.delete(this.apiURL + '/' + index);
  }
}

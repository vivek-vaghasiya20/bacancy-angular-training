import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../modal/todo.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private apiURL: string = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  public getAllTodo(): Observable<Todo[]> {
    console.log("called");
    return this.http.get<Todo[]>(this.apiURL);
  }

  public createTodo() {}

  public updateTodo() {}

  public deleteTodo() {}
}

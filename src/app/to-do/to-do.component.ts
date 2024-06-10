import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../modal/todo.modal';
import { AppState } from '../store/app.state';
import {
  addTodo,
  deleteTodo,
  getTodoList,
  updateTodo,
} from '../store/todo.actions';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  public toDoList: Todo[] = [];
  public newToDo: Todo = {
    id: 0,
    todo: '',
    completed: false,
    userId: 1,
  };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getData();
    this.store.select('toDos').subscribe((event: any) => {
      this.toDoList = event.toDos;
    });
  }

  public getData(): void {
    this.store.dispatch(getTodoList());
  }

  public addToDo(): void {
    if (this.newToDo.todo !== '') {
      this.store.dispatch(addTodo({ toDo: this.newToDo }));
      this.newToDo = { ...this.newToDo, todo: '' };
    } else {
      alert('Can not add with empty Description');
    }
  }

  public deleteToDo(index: number): void {
    if (confirm('Are you sure you want to delete this todo?')) {
      this.store.dispatch(deleteTodo({ id: index }));
    }
  }

  public updateToDo(todo: Todo): void {
    const updatedTodo = { ...todo, completed: !todo.completed };
    this.store.dispatch(updateTodo({ toDo: updatedTodo }));
  }
}

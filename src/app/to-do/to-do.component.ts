import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Todo } from '../modal/todo.modal';
import { getTodoSuccess } from '../store/todo.actions';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  public toDoArray!: Todo[];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    debugger;
    this.getData();
    this.store.select('toDos').subscribe((event: any) => {
      this.toDoArray = event;
    });
    console.log(this.toDoArray);
  }

  getData() {
    this.store.dispatch(getTodoSuccess({ toDos: [] }));
  }
}

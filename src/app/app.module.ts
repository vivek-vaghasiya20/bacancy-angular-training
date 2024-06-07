import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './store/todo.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoEffects } from './store/todo.effects';

@NgModule({
  declarations: [AppComponent, ToDoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ toDos: TodoReducer }),
    StoreDevtoolsModule.instrument({
      name: 'NGRX Demo App DevTools',
      maxAge: 25,
    }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

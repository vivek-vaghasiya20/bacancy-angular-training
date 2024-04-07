import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFourComponent } from './task-four/task-four.component';
import { FormsModule } from '@angular/forms';
import { CaptilizeOnHoverDirective } from './directives/captilize-on-hover.directive';
import { ClickCounterDirective } from './directives/click-counter.directive';

@NgModule({
  declarations: [AppComponent, TaskFourComponent, CaptilizeOnHoverDirective, ClickCounterDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

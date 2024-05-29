import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, FeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

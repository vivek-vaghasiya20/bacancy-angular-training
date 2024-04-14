import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { SocialPostComponent } from './social-feed/social-post/social-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialFeedComponent,
    SocialPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogsModule } from './blogs/blogs.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, BlogsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

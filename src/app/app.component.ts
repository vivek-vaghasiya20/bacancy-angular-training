import { isPlatformWorkerUi } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bacancy-angular-training';

  location: any;

  arrayItems = ['chair', 'watch', 'charging', 'mouse', 'laptop', 'pone'];

  isBool = true;
  toggleStyles() {
    this.isBool = !this.isBool;
  }
}

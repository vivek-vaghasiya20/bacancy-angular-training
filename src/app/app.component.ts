import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bacancy-angular-training';

  user1: string = 'Vivek';

  user2: any = {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    maidenName: 'Smitham',
    age: 50,
    gender: 'male',
  };

  buttonInfo: string = 'hideInfo';
  checkInfo: boolean = false;
  updateInfo() {
    this.checkInfo = !this.checkInfo;
    this.buttonInfo = this.checkInfo ? 'showInfo' : 'hideInfo';
  }
}

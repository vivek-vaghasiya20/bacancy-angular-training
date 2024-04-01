import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public userOne: string = 'Vivek';

  public userObject = {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    maidenName: 'Smitham',
    age: 50,
    gender: 'male',
  };

  public buttonInfo: string = 'hideInfo';
  public checkInfo: boolean = false;
  public updateInfo(): void {
    this.checkInfo = !this.checkInfo;
    this.buttonInfo = this.checkInfo ? 'showInfo' : 'hideInfo';
  }
}

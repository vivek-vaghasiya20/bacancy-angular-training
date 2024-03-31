import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bacancy-angular-training';
  user = { name: 'vivek' };
  employees: any = [];

  addEmp(): void {
    this.employees.push('employee');
  }

  onRemoveEmp(id: number) {
    const position = id;
    this.employees.splice(position, 1);
  }
}

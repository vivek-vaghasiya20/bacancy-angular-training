import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bacancy-angular-training';
  constructor(private route: Router) {}
  public navigate(): void {
    this.route.navigate([
      '/cricket',
      'India',
      'Rahul-Dravid',
      'Rohit-Sharma',
      '1',
    ]);
  }
}

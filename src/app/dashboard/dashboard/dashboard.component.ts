import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userData!: object;
  public userStatus!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getDetails().subscribe({
      next: (response) => {
        if (response.status === 200) {
          this.userData = response.data;
          this.userStatus = response.message;
        } else if (response.status === 401) {
          alert(response.message);
        } else if (response.status === 404) {
          alert(response.message);
        } else {
          alert(response.message);
        }
      },
      error: (err) => {
        if (err.status === 0) {
          alert('Network error');
        }
      },
    });
  }
}

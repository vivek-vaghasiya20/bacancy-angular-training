import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public userData!: object;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getDetails().subscribe((response) => {
      this.userData = response.data;
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/app/interface/admin.interface';
import { member } from 'src/app/interface/member.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent {
  public memberList: member[] = [];
  public loggedInUserEmail!: string;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  private getUserData(): void {
    const adminData = this.localStorageService.getUserData();
    const email = this.localStorageService.getLogInEmail();
    if (email !== null) {
      this.loggedInUserEmail = email;
      for (const admin of adminData) {
        const user = admin.users.find(
          (user) => user.email === this.loggedInUserEmail
        );
        if (user) {
          this.memberList = user.members;
          console.log(this.memberList);
          break;
        }
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}

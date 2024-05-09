import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/app/interface/admin.interface';
import { user } from 'src/app/interface/user.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  public persons: admin[] = [];
  public usersList: user[] = [];
  public loggedInAdminEmail!: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private useService: UserService
  ) {}

  ngOnInit(): void {
    this.persons = this.localStorageService.getUserData();
    const email = this.localStorageService.getLogInEmail();
    if (email !== null) {
      this.loggedInAdminEmail = email;
      const adminWithEmail = this.persons.find(
        (admin) => admin.email === this.loggedInAdminEmail
      );
      if (adminWithEmail) {
        this.usersList = adminWithEmail.users;
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  public editUser(user: user): void {
    user.isActive = !user.isActive;
    this.useService.updateUsers(this.loggedInAdminEmail, this.usersList);
    this.persons = this.localStorageService.getUserData();
  }

  public deleteUser(index: number): void {
    this.usersList.splice(index, 1);
    this.useService.updateUsers(this.loggedInAdminEmail, this.usersList);
    this.persons = this.localStorageService.getUserData();
  }
}

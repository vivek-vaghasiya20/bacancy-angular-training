import { Component, OnInit } from '@angular/core';
import { admin } from 'src/app/interface/admin.interface';
import { user } from 'src/app/interface/user.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  persons: admin[] = [];
  usersList: user[] = [];
  loggedInAdmin!: admin;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.persons = this.localStorageService.getUserData();
    this.loggedInAdmin = this.localStorageService.getLogInData();

    const adminWithEmail = this.persons.find(
      (admin) => admin.email === this.loggedInAdmin.email
    );
    if (adminWithEmail) {
      this.usersList = adminWithEmail.users;
    }
  }

  public editUser(user: user): void {
    user.isActive = !user.isActive;
    this.localStorageService.updateUserStatus(
      this.loggedInAdmin.email,
      this.usersList
    );
    this.persons = this.localStorageService.getUserData();
  }

  public deleteUser(index: number): void {
    this.usersList.splice(index, 1);
    this.localStorageService.updateUserStatus(
      this.loggedInAdmin.email,
      this.usersList
    );
    this.persons = this.localStorageService.getUserData();
  }
}

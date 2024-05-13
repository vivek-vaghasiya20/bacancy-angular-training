import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/interface/admin.interface';
import { User } from 'src/app/interface/user.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  public persons: Admin[] = [];
  public usersList: User[] = [];
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

  public changeStatus(user: User): void {
    user.isActive = !user.isActive;
    this.useService.updateUsers(this.loggedInAdminEmail, this.usersList);
    this.persons = this.localStorageService.getUserData();
  }

  public deleteUser(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure you want to delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersList.splice(index, 1);
        this.useService.updateUsers(this.loggedInAdminEmail, this.usersList);
        this.persons = this.localStorageService.getUserData();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your item has been deleted.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}

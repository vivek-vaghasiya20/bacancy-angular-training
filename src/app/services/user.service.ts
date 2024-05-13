import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { User } from '../interface/user.interface';
import { Admin } from '../interface/admin.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Member } from '../interface/member.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private localStorageService: LocalStorageService,
    public router: Router
  ) {}

  public updateUsers(adminEmail: string, updatedUsers: User[]): void {
    let userData = this.localStorageService.getUserData();
    const adminIndex = userData.findIndex(
      (admin) => admin.email === adminEmail
    );

    if (adminIndex !== -1) {
      userData[adminIndex].users = updatedUsers;
      this.localStorageService.setUserData(userData);
    }
  }

  public addNewUser(newUser: User, email: string): void {
    let adminData: Admin[] = this.localStorageService.getUserData();
    const adminIndex = adminData.findIndex((admin) => admin.email === email);
    if (adminIndex !== -1) {
      adminData[adminIndex].users.push(newUser);
      this.localStorageService.setUserData(adminData);
    }
  }

  public checkEmailExistence(email: string): boolean {
    const adminData: Admin[] = this.localStorageService.getUserData();
    for (const admin of adminData) {
      if (admin.email === email) {
        return true;
      }
      if (admin.users) {
        for (const user of admin.users) {
          if (user.email === email) {
            return true;
          }
          if (
            user.members &&
            user.members.some((member: Member) => member.email === email)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }

  public logout(): void {
    Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.localStorageService.removeLogInEmail();
        this.router.navigate(['/login']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You are logout successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}

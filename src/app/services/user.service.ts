import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { user } from '../interface/user.interface';
import { admin } from '../interface/admin.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private localStorageService: LocalStorageService) {}

  public updateUsers(adminEmail: string, updatedUsers: user[]): void {
    let userData = this.localStorageService.getUserData();
    const adminIndex = userData.findIndex(
      (admin) => admin.email === adminEmail
    );

    if (adminIndex !== -1) {
      userData[adminIndex].users = updatedUsers;
      this.localStorageService.setUserData(userData);
    }
  }

  public addNewUser(newUser: user, email: string): void {
    let adminData: admin[] = this.localStorageService.getUserData();
    const adminIndex = adminData.findIndex((admin) => admin.email === email);
    if (adminIndex !== -1) {
      adminData[adminIndex].users.push(newUser);
      this.localStorageService.setUserData(adminData);
    }
  }
}

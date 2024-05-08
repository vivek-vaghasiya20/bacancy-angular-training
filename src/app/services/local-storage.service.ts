import { Injectable } from '@angular/core';
import { admin } from '../interface/admin.interface';
import { user } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorageKey = 'users';
  private loggedInKey = 'loggedInEmail';

  constructor() {}

  public getUserData(): admin[] {
    const userDataStr = localStorage.getItem(this.localStorageKey);
    return userDataStr ? JSON.parse(userDataStr) : [];
  }

  public setUserData(userData: admin[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(userData));
  }

  public getLogInEmail(): string | null {
    return localStorage.getItem(this.loggedInKey) || null;
  }

  public updateUserStatus(adminEmail: string, updatedUsers: user[]): void {
    let userData = this.getUserData();
    const adminIndex = userData.findIndex(
      (admin) => admin.email === adminEmail
    );

    if (adminIndex !== -1) {
      userData[adminIndex].users = updatedUsers;
      this.setUserData(userData);
    }
  }

  public getUserByEmail(email: string): admin | user | null {
    const adminData: admin[] = this.getUserData();
    if (adminData) {
      let foundUser: admin | user | null = null;

      adminData.forEach((admin) => {
        if (admin.email === email) {
          foundUser = admin;
        } else {
          const user = admin.users.find((user) => user.email === email);
          if (user) {
            foundUser = user;
          }
        }
      });
      return foundUser;
    }
    return null;
  }
}

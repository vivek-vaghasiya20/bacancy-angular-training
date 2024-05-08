import { Injectable } from '@angular/core';
import { admin } from '../interface/admin.interface';
import { user } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorageKey = 'users';
  private loggedInKey = 'loggedInPerson';

  constructor() {}

  public getUserData(): admin[] {
    const userDataStr = localStorage.getItem(this.localStorageKey);
    return userDataStr ? JSON.parse(userDataStr) : [];
  }

  public setUserData(userData: admin[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(userData));
  }

  public getLogInData(): admin {
    const loggedInData = localStorage.getItem(this.loggedInKey);
    return loggedInData ? JSON.parse(loggedInData) : {};
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
}

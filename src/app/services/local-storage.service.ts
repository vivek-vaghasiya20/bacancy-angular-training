import { Injectable } from '@angular/core';
import { Admin } from '../interface/admin.interface';
import { User } from '../interface/User.interface';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorageKey = 'users';
  private loggedInKey = 'loggedInEmail';

  public getUserData(): Admin[] {
    const userDataStr = localStorage.getItem(this.localStorageKey);
    return userDataStr ? JSON.parse(userDataStr) : [];
  }

  public setUserData(userData: Admin[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(userData));
  }

  public setLogInEmail(email: string): void {
    localStorage.setItem(this.loggedInKey, email);
  }

  public getLogInEmail(): string | null {
    return localStorage.getItem(this.loggedInKey) || null;
  }

  public getUserByEmail(email: string): Admin | User | null {
    const adminData: Admin[] = this.getUserData();
    if (adminData) {
      let foundUser: Admin | User | null = null;

      adminData.forEach((admin) => {
        if (admin.email === email) {
          foundUser = admin;
        } else {
          const user = admin.users.find((user: User) => user.email === email);
          if (user) {
            foundUser = user;
          }
        }
      });
      return foundUser;
    }
    return null;
  }

  public removeLogInEmail(): void {
    localStorage.removeItem(this.loggedInKey);
  }

  public encryptPassword(password: string): string {
    const key = CryptoJS.enc.Utf8.parse('nothingIsImpossible');
    const iv = CryptoJS.enc.Utf8.parse('yourIV');
    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(password),
      key,
      {
        keySize: 128 / 8,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    return encrypted.toString();
  }
}

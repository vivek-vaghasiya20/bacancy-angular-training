import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: string[] = ['Project1'];

  constructor() {}

  public checkProjectNameExists(name: string): boolean {
    let isTaken: boolean = false;
    if (this.projects) {
      isTaken = this.projects.includes(name);
    }
    return isTaken;
  }
}

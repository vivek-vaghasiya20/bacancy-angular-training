import { Component, DoCheck } from '@angular/core';
import { Team } from '../interfaces/team.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  public teamArray: Team[] = [
    { teamName: 'IND', teamPlayer: 11 },
    { teamName: 'USA', teamPlayer: 11 },
    { teamName: 'CAN', teamPlayer: 11 },
    { teamName: 'IRE', teamPlayer: 11 },
    { teamName: 'PAK', teamPlayer: 11 },
  ];
  public newTeam: Team | null = { teamName: 'USA', teamPlayer: 11 };

  public increasePlayer(): void {
    if (this.newTeam) {
      this.newTeam.teamPlayer++;
      this.newTeam = { ...this.newTeam };
    }
  }

  public decreasePlayer(): void {
    if (this.newTeam && this.newTeam.teamPlayer > 0) {
      this.newTeam.teamPlayer--;
      this.newTeam = { ...this.newTeam };
    }
  }

  public deleteObject(): void {
    //if i deleteObject from the parent then it will reflect to child because null data type is not reference type.
    this.newTeam = null;
  }

  public increasePlayerOfArray(index: number): void {
    this.teamArray[index].teamPlayer++;
    this.teamArray = [...this.teamArray];
  }

  public decreasePlayerOfArray(index: number): void {
    if (this.teamArray[index].teamPlayer > 0) {
      this.teamArray[index].teamPlayer--;
      this.teamArray = [...this.teamArray];
    }
  }

  public deleteObjectOfArray(index: number): void {
    this.teamArray.splice(index, 1);
    this.teamArray = [...this.teamArray];
  }
}

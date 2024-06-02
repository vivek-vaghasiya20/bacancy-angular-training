import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Team } from '../interfaces/team.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() teamArray: Team[] = [];
  @Input({ required: true }) newTeam!: Team | null;

  public increasePlayer(): void {
    if (this.newTeam) {
      this.newTeam.teamPlayer++;
    }
  }

  public decreasePlayer(): void {
    if (this.newTeam && this.newTeam.teamPlayer > 0) {
      this.newTeam.teamPlayer--;
    }
  }

  public deleteObject(): void {
    this.newTeam = null;
  }

  public increasePlayerOfArray(index: number): void {
    this.teamArray[index].teamPlayer++;
  }

  public decreasePlayerOfArray(index: number): void {
    if (this.teamArray[index].teamPlayer > 0) {
      this.teamArray[index].teamPlayer--;
    }
  }

  public deleteObjectOfArray(index: number): void {
    this.teamArray.splice(index, 1);
  }
}

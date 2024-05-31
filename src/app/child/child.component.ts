import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input
} from '@angular/core';
import { Team } from '../interfaces/team.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements DoCheck {
  @Input() teamArray: Team[] = [];
  @Input({ required: true }) newTeam!: Team;
  ngDoCheck(): void {
    console.log(
      '%csrcappchildchild.component.ts:13 this.newTeam',
      'color: #007acc;',
      this.newTeam
    );
    console.log('child called');
  }
}

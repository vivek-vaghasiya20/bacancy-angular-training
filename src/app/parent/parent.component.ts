import { Component, DoCheck } from '@angular/core';
import { Team } from '../interfaces/team.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements DoCheck {
  public newTeam: Team = { team: 'USA' };
  ngDoCheck(): void {
    console.log(
      '%csrcappparentparent.component.ts:12 this.newTeam',
      'color: #007acc;',
      this.newTeam
    );
    console.log('parent called');
  }
}

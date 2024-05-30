import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss'],
})
export class CricketComponent {
  @Input('message') startInfo?: string;
  @Input() team?: string;
  @Input() coach?: string;
  @Input() captain?: string;
  @Input() iccRanking?: number;
}

import { isPlatformWorkerUi } from '@angular/common';
import { Component } from '@angular/core';
import { product } from './interface/interface';
import { Location } from './const/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'bacancy-angular-training';

  public location: Location = Location.Home;
  public selectOptions: string[] = Object.values(Location);

  public TableIndexHeader: string = 'Product Index';
  public TableProductHeader: string = 'Product Name';
  public productItems: product[] = [
    { name: 'chair' },
    { name: 'watch' },
    { name: 'charging' },
    { name: 'mouse' },
    { name: 'laptop' },
    { name: 'pone' },
  ];

  public isTrue: boolean = true;
  public changeStyles(): void {
    this.isTrue = !this.isTrue;
  }
}

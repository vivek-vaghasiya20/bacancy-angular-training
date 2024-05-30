import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CricketComponent } from './cricket/cricket.component';

const routes: Routes = [
  {
    path: 'cricket/:team/:coach/:captain/:iccRanking',
    component: CricketComponent,
    data: { message: "The ICC Men's T20 World Cup will start on 2nd june." },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

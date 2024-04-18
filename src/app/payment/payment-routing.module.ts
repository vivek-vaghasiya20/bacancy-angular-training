import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { DepositNotesComponent } from './deposit-notes/deposit-notes.component';
import { DepositCoinsComponent } from './deposit-coins/deposit-coins.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';

const paymentRoutes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    pathMatch: 'prefix',
    children: [
      { path: 'check-balance', component: CheckBalanceComponent },
      {
        path: 'deposit-money',
        component: DepositMoneyComponent,
        pathMatch: 'prefix',
        children: [
          { path: 'deposit-coins', component: DepositCoinsComponent },
          { path: 'deposit-notes', component: DepositNotesComponent },
        ],
      },
      { path: 'withdraw-money', component: WithdrawMoneyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(paymentRoutes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}

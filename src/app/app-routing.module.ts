import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ItemsComponent } from './components/items/items.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { PaymentInfoComponent } from './components/payment-info/payment-info.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'payment-info/:id', component: PaymentInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

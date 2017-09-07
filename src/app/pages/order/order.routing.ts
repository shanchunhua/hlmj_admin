import { StealOrderComponent } from './components/steal/steal-order.component';
import { HenRentalComponent } from './components/henRental/henRental.component';

import { Routes, RouterModule }  from '@angular/router';

import { Order } from './order.component';
import { ShippingOrders } from './components/shippingOrders/shippingOrders.component';
import { CockAdoptionOrderComponent } from './components/cock-adoption/cock-adoption.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Order,
    children: [
      { path: 'shippingOrders', component: ShippingOrders },
      {path:'cockAdoptionOrders',component:CockAdoptionOrderComponent},
      {path:'henRentalOrders',component:HenRentalComponent},
       {path:'stealOrders',component:StealOrderComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);

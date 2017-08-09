import { HenRentalService } from './components/henRental/henRental.service';
import { HenRentalComponent } from './components/henRental/henRental.component';

import { ModalModule } from 'ng2-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';

import { Order } from './order.component';
import { routing } from './order.routing';
import { ShippingOrders } from './components/shippingOrders/shippingOrders.component';
import { ShippingOrderService } from './components/shippingOrders/shippingOrder.service'
import { CockAdoptionOrderComponent } from './components/cock-adoption/cock-adoption.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ModalModule.forRoot(),
    routing
  ],
  declarations: [
    Order,
    ShippingOrders,
    CockAdoptionOrderComponent,
    HenRentalComponent
  ],
  providers: [
    ShippingOrderService,
    HenRentalService
  ]
})
export class OrderModule { }

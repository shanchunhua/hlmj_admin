import { ShippingOrder } from './../../model/shipping-order';
import { RestResult } from './../../../../rest-result';
import { Observable } from 'rxjs/Observable';
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { ShippingOrderService } from './shippingOrder.service'
@Component({
  selector: 'shippingOrders',
  templateUrl: './shippingOrders.html',
})
export class ShippingOrders {
  @ViewChild('shippingModal') shippingModal: ModalDirective;
  @ViewChild('orderItemModal') orderItemModal: ModalDirective;

  items: ShippingOrder[];
  orderId: number=1;
  currentOrder: ShippingOrder = new ShippingOrder();
  constructor(private shippingOrderService: ShippingOrderService) {
  }
  ngOnInit(): void {
    this.loadOrders();
  }
  loadOrders(): void {
    this.shippingOrderService.getOrders().subscribe((res: RestResult<ShippingOrder[]>) => {
      this.items = res.data;
    });
  }
  showShippingModal(order: ShippingOrder): void {
    this.currentOrder = order;
    this.shippingModal.show();
  }
  showOrderItemModal(id: number): void {
    console.log(id);
    this.orderId = id;
    this.orderItemModal.show();
  }
  save(): void {
    console.log(this.currentOrder);
    this.shippingOrderService.save(this.currentOrder).subscribe((res: RestResult<any>) => {
      this.loadOrders();
    })
    this.shippingModal.hide();
  }

}

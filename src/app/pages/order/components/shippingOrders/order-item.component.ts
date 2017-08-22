import { RestResult } from './../../../../rest-result';
import { OrderItem } from './../../model/order-item';
import { ShippingOrderService } from './shippingOrder.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'order-item',
    templateUrl: 'order-item.component.html'
})

export class OrderItemComponent implements OnInit {
    _orderId: number;
    items: OrderItem[];
    constructor(private service: ShippingOrderService) {

    }

    ngOnInit() {
    }
    @Input()
    set orderId(orderId:number){
        this._orderId=orderId;
        this.service.getOrderItems(this._orderId).subscribe((res: RestResult<OrderItem[]>) => {
            this.items = res.data;
        });
    }
    get orderId(){
        return this._orderId;
    }
}
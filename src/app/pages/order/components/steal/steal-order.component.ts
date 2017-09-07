import { StealOrder } from './../../model/steal-order';
import { StealOrderService } from './steal-order.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'steal-order',
    templateUrl: './steal-order.component.html'
})

export class StealOrderComponent implements OnInit {
    constructor(private service:StealOrderService) { }
    items:StealOrder[];
    ngOnInit() { 
        this.load();
    }
    load(){
        this.service.load().subscribe((res)=>{
            this.items=res.data;
        });
    }
}
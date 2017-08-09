import { RestResult } from './../../../../rest-result';
import { HenRentalService } from './henRental.service';
import { HenRentalOrder } from './../../model/hen-rental-order';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hen-rental',
    templateUrl: 'henRental.component.html'
})

export class HenRentalComponent implements OnInit {
    constructor(private henRentalService: HenRentalService) { }
    items: HenRentalOrder[];
    ngOnInit() {
       this.henRentalService.getOrders().subscribe((res:RestResult<HenRentalOrder[]>)=>{
           this.items=res.data;
       })
     }
}
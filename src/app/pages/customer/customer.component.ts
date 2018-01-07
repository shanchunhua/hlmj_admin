import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';
import 'style-loader!./customer.scss';
@Component({
    selector: 'customer',
    templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit {
    genderMap={'0':'未知',1:'男',2:'女'};
    constructor(private service:CustomerService) { }
    items: any[];
    ngOnInit() {
      this.load();
    }
    load() {
      this.service.loadCustomers().subscribe(res => {
        this.items = res.data;
      });
    }
}
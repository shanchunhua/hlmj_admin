import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private service: CustomerService) { }
  items: any[];
  ngOnInit() {
    this.load();
  }
  load() {
    this.service.loadSales().subscribe(res => {
      this.items = res.data;
    });
  }
  approve(item) {
    this.service.approveSales(item).subscribe(res => {
      this.load();
    });
  }
}

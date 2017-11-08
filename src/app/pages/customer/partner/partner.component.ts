import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

 
  constructor(private service: CustomerService) { }
  items: any[];
  ngOnInit() {
    this.load();
  }
  load() {
    this.service.loadPartner().subscribe(res => {
      this.items = res.data;
    });
  }
  approve(item) {
    this.service.approvePartner(item).subscribe(res => {
      this.load();
    });
  }

}

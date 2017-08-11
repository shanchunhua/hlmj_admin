import { RestResult } from './../../../../rest-result';
import { CockAdoptionService } from './cock-adoption.service';
import { CockAdoption } from './../../model/cock-adoption';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cock-adoption-order',
    templateUrl: './cock-adoption-order.component.html'
})

export class CockAdoptionOrderComponent implements OnInit {
    items:CockAdoption[];
    constructor(private service:CockAdoptionService) { }

    ngOnInit() {this.load(); }
    load(){
        this.service.load().subscribe((res:RestResult<CockAdoption[]>)=>{
            this.items=res.data;
        });
    }
}
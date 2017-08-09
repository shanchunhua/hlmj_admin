import { Hennery } from './../../model/hennery';
import { RestResult } from './../../../../rest-result';
import { HenneryService } from './hennery.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hennery',
    templateUrl: 'hennery.component.html'
})

export class HenneryComponent implements OnInit {
    constructor(private service:HenneryService) { }
    items:Hennery[];
    ngOnInit() { 
        this.service.load().subscribe((res:RestResult<Hennery[]>)=>{
            this.items=res.data;
        })
    }
}
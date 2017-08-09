import { RestResult } from './../../../../rest-result';
import { HenneryService } from './hennery.service';
import { Hennery } from './../../model/hennery';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'hennery-edit',
    templateUrl: 'hennery.edit.component.html'
})

export class HenneryEditComponent implements OnInit {
    item:Hennery=new Hennery();
    constructor(private route: ActivatedRoute,private service:HenneryService) { }

    ngOnInit() { 
        this.route.params.subscribe(params=>{
            const id=params['id'];
            this.service.get(id).subscribe((res:RestResult<Hennery>)=>{
                this.item=res.data;
            })
        });
    }
}
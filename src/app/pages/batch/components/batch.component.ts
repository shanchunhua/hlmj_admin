import { Batch } from './../model/batch';
import { RestResult } from './../../../rest-result';
import { BatchService } from './batch.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'batch',
    templateUrl: 'batch.component.html'
})

export class BatchComponent implements OnInit {
    items:Batch[];
    constructor(private service:BatchService) { }

    ngOnInit() {
        this.load();
     }
    load(){
        this.service.load().subscribe((res:RestResult<Batch[]>)=>{
            this.items=res.data;
        });
    }
}
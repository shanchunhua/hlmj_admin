import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { RestResult } from './../../../../rest-result';
import { Steal } from './../../model/steal';
import { StealService } from './steal.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'steal',
    templateUrl: 'steal.component.html'
})

export class StealComponent implements OnInit {
    items: Steal[];
    constructor(private service: StealService,private slimLoadingBarService: SlimLoadingBarService) {

    }
    load() {
        this.slimLoadingBarService.start();
        this.service.load().subscribe((res: RestResult<Steal[]>) => {
            this.items = res.data;
              this.slimLoadingBarService.complete();
        })
    }
    enable(id:string){
        this.service.enable(id).subscribe((res:RestResult<any>)=>{
            this.load();
        });
    }
    ngOnInit() { 
        this.load();
    }
}
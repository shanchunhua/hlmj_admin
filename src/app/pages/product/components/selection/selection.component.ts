import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Selection } from './../../model/selection';
import { RestResult } from './../../../../rest-result';
import { SelectionService } from './selection.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selection',
    templateUrl: 'selection.component.html'
})

export class SelectionComponent implements OnInit {
    constructor(private selectionSerivce: SelectionService) { }
    items:Selection[];
    ngOnInit() {
        this.selectionSerivce.load().subscribe((res:RestResult<Selection[]>)=>{
            this.items=res.data;
        });
     }
}
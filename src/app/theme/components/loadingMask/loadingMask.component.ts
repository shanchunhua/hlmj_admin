import { LoadingMaskService } from './loading-mask.service';
import { Component, OnInit } from '@angular/core';
import 'style-loader!./loadingMask.scss';
@Component({
    selector: 'loading-mask',
    template: `<div [hidden]="!show" class="lmask"></div>`
})

export class LoadingMaskComponent implements OnInit {

    show: boolean=false;
    constructor(private loadingMaskService: LoadingMaskService) {

    }

    ngOnInit() {
        this.loadingMaskService.events.subscribe((show => {
            console.log(show);
            this.show = show;
        }))
    }
}
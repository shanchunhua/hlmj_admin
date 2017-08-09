import { StealService } from './steal.service';
import { RestResult } from './../../../../rest-result';
import { Steal } from './../../model/steal';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'steal-edit',
    templateUrl: 'steal.edit.component.html'
})

export class StealEditComponent implements OnInit {
    product: Steal = new Steal();
    constructor(private route: ActivatedRoute, private service: StealService) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                const id = params['id'];
                if (id != 0) {
                    this.service.get(id).subscribe(
                        (res: RestResult<Steal>) => this.product = res.data)
                }
            });
    }
    save() {
        this.service.save(this.product).subscribe((res: RestResult<any>) => {

        });
    }
}
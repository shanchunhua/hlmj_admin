import { RestResult } from './../../../rest-result';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BatchService } from './batch.service';
import { Batch } from './../model/batch';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'batch-edit',
    templateUrl: 'batch.edit.component.html'
})

export class BatchEditComponent implements OnInit {
    batch: Batch = new Batch();
    constructor(private service: BatchService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                const id = params['id'];
                if (id != 0) {
                    this.service.get(id).subscribe(
                        (res: RestResult<Batch>) => this.batch = res.data)
                }
            });
    }
    save() {
        this.service.save(this.batch).subscribe((res: RestResult<any>) => {
            this.router.navigate(['/pages/batch/batch']);
        });
    }
}
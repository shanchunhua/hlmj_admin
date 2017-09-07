import { Constants } from './../../../../../constants';
import { NgUploaderOptions } from 'ngx-uploader';
import { StealService } from './steal.service';
import { RestResult } from './../../../../rest-result';
import { Steal } from './../../model/steal';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, NgZone, Inject } from '@angular/core';

@Component({
    selector: 'steal-edit',
    templateUrl: 'steal.edit.component.html'
})

export class StealEditComponent implements OnInit {
    product: Steal = new Steal();
    public defaultPicture = 'assets/img/theme/no-photo.png';
    response: any;
    public uploaderOptions: NgUploaderOptions = {
        // url: 'http://website.com/upload'
        url: Constants.API_ENDPOINT + '/fileupload',
    };
    constructor( @Inject(NgZone) private zone: NgZone, private route: ActivatedRoute, private router: Router, private service: StealService) { }

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
    handleUpload(data) {
        setTimeout(() => {
            this.zone.run(() => {
                this.response = data;
                if (data && data.response) {
                    this.response = JSON.parse(data.response);
                    console.log(this.response);
                    this.product.image = this.response.data;
                }
            });
        });
    }
    save() {
        this.service.save(this.product).subscribe((res: RestResult<any>) => {
            this.router.navigate(['/pages/product/steal']);
        });
    }
}
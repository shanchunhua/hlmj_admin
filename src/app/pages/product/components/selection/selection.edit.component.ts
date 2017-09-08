import { Constants } from './../../../../../constants';
import { AppSettings } from './../../../../app.config';
import { RestResult } from './../../../../rest-result';
import { SelectionService } from './selection.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgUploaderOptions } from 'ngx-uploader';
import { Selection } from './../../model/selection';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Inject, NgZone } from '@angular/core';

@Component({
    selector: 'selection-edit',
    templateUrl: 'selection.edit.component.html'
})

export class SelectionEditComponent implements OnInit {
    product: Selection = new Selection();
    public defaultPicture = 'assets/img/theme/no-photo.png';
    response: any;
    public uploaderOptions: NgUploaderOptions = {
        // url: 'http://website.com/upload'
        url: Constants.API_ENDPOINT + '/fileupload',
        autoUpload: true,
        calculateSpeed: true
    };
    constructor( @Inject(NgZone) private zone: NgZone, private route: ActivatedRoute, private router: Router, private service: SelectionService) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                let id = params['id'];
                if (id != 0) {
                    this.service.get(id).subscribe(
                        (res: RestResult<Selection>) => this.product = res.data);
                }
            });
    }


    handleUpload(data) {
        console.log(data);
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
    handleUpload2(data) {
        console.log(data);
        setTimeout(() => {
            this.zone.run(() => {
                this.response = data;
                if (data && data.response) {
                    this.response = JSON.parse(data.response);
                    console.log(this.response);
                    this.product.description = this.response.data;
                }
            });
        });
    }
    save() {
        console.log(this.product);
        this.service.save(this.product).subscribe((res: RestResult<any>) => {
            this.router.navigate(['/pages/product/selection']);
        });
    }
}
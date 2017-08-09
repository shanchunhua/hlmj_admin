import { RestResult } from './../../../../rest-result';
import { SelectionService } from './selection.service';
import { ActivatedRoute, Params } from '@angular/router';
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
        url: 'http://localhost:8080/fileupload',
    };
    constructor( @Inject(NgZone) private zone: NgZone, private route: ActivatedRoute, private service: SelectionService) { }

    ngOnInit() {
        this.route.params.switchMap(
            (params: Params) => this.service.get(params['id'])).subscribe(
            (res: RestResult<Selection>) => this.product = res.data);
    }


    handleUpload(data) {
        setTimeout(() => {
            this.zone.run(() => {
                this.response = data;
                if (data && data.response) {
                    this.response = JSON.parse(data.response);
                    this.product.image = this.response.data;
                }
            });
        });
    }
    save() {
        console.log(this.product);
        this.service.save(this.product).subscribe((res:RestResult<any>)=>{
            console.log(res);
        });
    }
}
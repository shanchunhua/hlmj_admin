import { StealOrder } from './../../model/steal-order';
import { RestResult } from './../../../../rest-result';
import { Constants } from './../../../../../constants';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StealOrderService {
    constructor(private http: Http) {

    }
    load(): Observable<RestResult<StealOrder[]>> {
        const url = Constants.API_ENDPOINT + "/stealOrder/example";
        return this.http.post(url, { paid: true }).map(function (res: Response) {
            return res.json() as RestResult<StealOrder[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
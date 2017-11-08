import { Batch } from './../batch/model/batch';
import { RestResult } from './../../rest-result';
import { Observable } from 'rxjs/Observable';
import { InterceptorService } from 'ng2-interceptors';
import { Injectable } from '@angular/core';
import { Constants } from '../../../constants';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {

    constructor(private http: InterceptorService) { }
    loadSales(): Observable<RestResult<any[]>> {
        const url = Constants.API_ENDPOINT + "/sales";
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<any[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    approveSales(item): Observable<RestResult<any>> {
        const url = Constants.API_ENDPOINT + "/sales";
        item.status='APPROVED';
        return this.http.put(url,item).map(function (res: Response) {
            return res.json() as RestResult<any>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    loadPartner(): Observable<RestResult<any[]>> {
        const url = Constants.API_ENDPOINT + "/partner";
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<any[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    approvePartner(item): Observable<RestResult<any>> {
        const url = Constants.API_ENDPOINT + "/partner";
        item.status='APPROVED';
        return this.http.put(url,item).map(function (res: Response) {
            return res.json() as RestResult<any>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
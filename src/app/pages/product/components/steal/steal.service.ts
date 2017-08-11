import { InterceptorService } from 'ng2-interceptors';
import { Observable } from 'rxjs/Rx';

import { Constants } from './../../../../../constants';
import { Steal } from './../../model/steal';
import { RestResult } from './../../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StealService {
    constructor(private http: InterceptorService) { }
    load(): Observable<RestResult<Steal[]>> {
        const url = Constants.API_ENDPOINT + '/goodsForSteal';
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Steal[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get(id: string): Observable<RestResult<Steal>> {
        const url = Constants.API_ENDPOINT + '/goodsForSteal/' + id;
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Steal>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    enable(id: string): Observable<RestResult<any>> {
        const url = Constants.API_ENDPOINT + '/goodsForSteal/enable/' + id;
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Steal[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    save(item): Observable<RestResult<any>> {
        const url = Constants.API_ENDPOINT + '/goodsForSteal';
        return this.http.post(url, item).map(function (res: Response) {
            return res.json() as RestResult<Steal[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
import { Constants } from './../../../../../constants';
import { CockAdoption } from './../../model/cock-adoption';
import { RestResult } from './../../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CockAdoptionService {
    constructor(private http: Http) { }
    load(): Observable<RestResult<CockAdoption[]>> {

        const url = Constants.API_ENDPOINT + "/cockAdoptionOrder/example";
        return this.http.post(url, { paid: true }).map(function (res: Response) {
            return res.json() as RestResult<CockAdoption[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
import { Hennery } from './../../model/hennery';
import { Constants } from './../../../../../constants';
import { RestResult } from './../../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HenneryService {
    constructor(private http: Http) { }
    load(): Observable<RestResult<Hennery[]>> {
        const url = Constants.API_ENDPOINT + '/hennery';
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Hennery[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get(id: string): Observable<RestResult<Hennery>> {
        const url = Constants.API_ENDPOINT + '/hennery/' + id;
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Hennery>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
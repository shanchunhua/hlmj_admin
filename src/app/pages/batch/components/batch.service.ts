import { Constants } from './../../../../constants';
import { Batch } from './../model/batch';
import { RestResult } from './../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BatchService {
    constructor(private http: Http) { }
    load(): Observable<RestResult<Batch[]>> {
        const url = Constants.API_ENDPOINT + "/cockRaisingBatch";
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Batch[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get(id: string): Observable<RestResult<Batch>> {
        const url = Constants.API_ENDPOINT + '/cockRaisingBatch/' + id;
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Batch>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    save(item): Observable<RestResult<any>> {
        const url = Constants.API_ENDPOINT + '/cockRaisingBatch';
        return this.http.post(url, item).map(function (res: Response) {
            return res.json() as RestResult<Batch>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
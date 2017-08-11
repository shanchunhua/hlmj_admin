import { Selection } from './../../model/selection';
import { RestResult } from './../../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { InterceptorService } from "ng2-interceptors";

@Injectable()
export class SelectionService {
    constructor(private http: InterceptorService) { }
    load(): Observable<RestResult<Selection[]>> {
        const url = "http://localhost:8080/collectionGoods";
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Selection[]>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    get(id: string): Observable<RestResult<Selection>> {
        console.log(id);
        const url = "http://localhost:8080/collectionGoods/" + id;
        return this.http.get(url).map(function (res: Response) {
            return res.json() as RestResult<Selection>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    save(product:Selection):Observable<RestResult<Selection>>{
         const url = "http://localhost:8080/collectionGoods/";
        return this.http.post(url,product).map(function (res: Response) {
            return res.json() as RestResult<Selection>;
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }
}

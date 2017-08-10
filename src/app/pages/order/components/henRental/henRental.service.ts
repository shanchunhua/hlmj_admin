import { Constants } from './../../../../../constants';
import { HenRentalOrder } from './../../model/hen-rental-order';
import { RestResult } from './../../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HenRentalService {
    constructor(private http: Http) { }
     getOrders(): Observable<RestResult<HenRentalOrder[]>> {

    const url =  Constants.API_ENDPOINT+"/henRentOrder/example";
    return this.http.post(url,{paid:true}).map(function (res: Response) {
      return res.json() as RestResult<HenRentalOrder[]>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
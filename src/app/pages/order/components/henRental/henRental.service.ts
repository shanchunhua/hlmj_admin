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
    //  var url = "https://www.huanlemujia.com/shippingOrder"
    const url = "http://localhost:8080/henRentOrder";
    return this.http.get(url).map(function (res: Response) {
      return res.json() as RestResult<HenRentalOrder[]>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
import { ShippingOrder } from './../../model/shipping-order';
import { RestResult } from './../../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from "../../../../../constants";


@Injectable()
export class ShippingOrderService {
  constructor(private http: Http) { }
  getOrders(): Observable<RestResult<ShippingOrder[]>> {
    const url = Constants.API_ENDPOINT+"/shippingOrder/example";
    return this.http.post(url,{
      paid:true
    }).map(function (res: Response) {
      return res.json() as RestResult<ShippingOrder[]>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  save(order: ShippingOrder): Observable<RestResult<any>> {
    const url =  Constants.API_ENDPOINT+"/shippingOrder";
    return this.http.post(url, order).map(function (res: Response) {
      return res.json() as RestResult<any>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

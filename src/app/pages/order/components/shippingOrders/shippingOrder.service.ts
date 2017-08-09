import { ShippingOrder } from './../../model/shipping-order';
import { RestResult } from './../../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ShippingOrderService {
  constructor(private http: Http) { }
  getOrders(): Observable<RestResult<ShippingOrder[]>> {
    //  var url = "https://www.huanlemujia.com/shippingOrder"
    const url = "http://localhost:8080/shippingOrder";
    return this.http.get(url).map(function (res: Response) {
      return res.json() as RestResult<ShippingOrder[]>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  save(order: ShippingOrder): Observable<RestResult<any>> {
    const url = "http://localhost:8080/shippingOrder";
    return this.http.post(url, order).map(function (res: Response) {
      return res.json() as RestResult<any>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

import { Observable } from 'rxjs/Observable';
import { InterceptorService } from 'ng2-interceptors';
import { ShippingOrder } from './../../model/shipping-order';
import { RestResult } from './../../../../rest-result';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Constants } from "../../../../../constants";
import { OrderItem } from "../../model/order-item";


@Injectable()
export class ShippingOrderService {
  constructor(private http: InterceptorService) { }
  getOrders(): Observable<RestResult<ShippingOrder[]>> {
    const url = Constants.API_ENDPOINT+"/shippingOrder/example";
    return this.http.post(url,{
      paid:true
    }).map(function (res: Response) {
      return res.json() as RestResult<ShippingOrder[]>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getOrderItems(id:number):Observable<RestResult<OrderItem>>{
     const url = Constants.API_ENDPOINT+"/shippingOrderItem/example";
    return this.http.post(url,{
      order:{id:id}
    }).map(function (res: Response) {
      return res.json() as RestResult<OrderItem[]>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  save(order: ShippingOrder): Observable<RestResult<any>> {
    const url =  Constants.API_ENDPOINT+"/shippingOrder/logistics";
    return this.http.post(url, order).map(function (res: Response) {
      return res.json() as RestResult<any>;
    }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

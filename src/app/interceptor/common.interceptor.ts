import { Injectable } from '@angular/core';
import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Injectable()
export class CommonInterceptor implements Interceptor{
    constructor(private slimLoadingBarService: SlimLoadingBarService){

    }
    public interceptBefore(request:InterceptedRequest){
        console.log('before');
        this.slimLoadingBarService.start();
        return request;
    }
    public interceptAfter(response:InterceptedResponse){
        console.log('after');
        return response;
    }
}
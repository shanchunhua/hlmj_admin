import { LoadingMaskService } from './../theme/components/loadingMask/loading-mask.service';
import { Injectable } from '@angular/core';
import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Injectable()
export class CommonInterceptor implements Interceptor{
    constructor(private slimLoadingBarService: SlimLoadingBarService,private loadingMaskService:LoadingMaskService){

    }
    public interceptBefore(request:InterceptedRequest){
        console.log('before');
//        this.slimLoadingBarService.start();
        this.loadingMaskService.show();
        return request;
    }
    public interceptAfter(response:InterceptedResponse){
        console.log('after');
 //       this.slimLoadingBarService.complete();
        this.loadingMaskService.hide();
        return response;
    }
}
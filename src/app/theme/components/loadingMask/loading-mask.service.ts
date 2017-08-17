import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingMaskService {
    private eventSource: Subject<any> = new Subject<any>();
    public events: Observable<any> = this.eventSource.asObservable();
    counter: number = 0;
    constructor() { }
    show() {
        this.counter++;
        setTimeout(() => {
            if (this.counter>0) {
                this.eventSource.next(true);
            }

        }, 200);

    }
    hide() {
        this.counter--;
        setTimeout(() => {
            if (this.counter<=0) {
                this.eventSource.next(false);
            }
        }, 200);
    }
}
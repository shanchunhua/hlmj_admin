import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderType'
})

export class OrderTypePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        switch (value) {
            case 'COCK': {
                return '回收红公鸡';
            }
            case 'EGG': {
                return '回收鸡蛋';
            }
            case 'MORNING_MARKET': {
                return '早市商品';
            }
            case 'SELECTION': {
                return '牧家精选';
            }
        }
    }
}
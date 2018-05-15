import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { PipeResolver } from '@angular/compiler';

@Pipe({
    name: 'catYears'
})
export class CatYearsPipe implements PipeTransform {
    transform(value: Date): number {
        let humanYears =  moment().diff(moment(value), 'years');
        let totalCatYears = 0;
        if(humanYears >= 25){
            let moreThan25 = humanYears % 25;
            totalCatYears = moreThan25 * 4 + 2;
        }
        else{
            totalCatYears = humanYears * (2/25);
        }
        return totalCatYears;
    }
}
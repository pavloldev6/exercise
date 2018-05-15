import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { PipeResolver } from '@angular/compiler';

@Pipe({
    name: 'catYears'
})
export class CatYearsPipe implements PipeTransform {
    transform(value: Date): number {
        let diff = Math.floor(moment().diff(moment(value), "years", true));
		
		if ( diff <= 2 ) {
			diff = Math.floor(moment().diff(moment(value), "months", true));
			return Math.round(diff / 24 * 25);
		} else {
			return 25 + ((diff - 2) * 4);
		}
    }
}
import { Cat } from './cat';
import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'cat-detail',
    templateUrl: './cat-details.component.html',
    styles: []
})
export class CatDetailComponent{
    @Input() cat: Cat;
    @Output() isFavourite: EventEmitter<Cat> = new EventEmitter<Cat>();

    setAsFavourite(){
        this.isFavourite.emit(this.cat);
    }
}
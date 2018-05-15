import { Pet } from '../shared/pet';
import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'cat-detail',
    template: require('./cat-detail.component.html'),
    styles: []
})
export class CatDetailComponent{
    @Input() cat: Pet;
    @Output() isFavourite: EventEmitter<Pet> = new EventEmitter<Pet>();

    setAsFavourite(): any {
        this.isFavourite.emit(this.cat);
    }
}
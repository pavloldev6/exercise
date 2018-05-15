import { Injectable } from '@angular/core';
import { Pet } from '../shared/pet';

@Injectable()
export class PetService {

    private cats: Pet[];
    favouritePet: Pet;

    constructor(){
        this.cats = [
            new Pet(1, 'Tom', 'himalayan', 'Likes to play', new Date(1993, 11, 16)),
            new Pet(2, 'Foo', 'regdoll', 'Very friendly, likes people so much', new Date(2014, 5, 26)),
            new Pet(3, 'Sparkles', 'regdoll', 'Very lazy animal', new Date(2015, 0, 3))
        ];
    }
    
    getPetList(): Pet[] {
        return this.cats;
    }

    getPet(id: number): Pet | undefined {
        return this.cats.find(c => c.id === id);
    }
}
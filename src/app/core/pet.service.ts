import { Injectable } from '@angular/core';
import { Pet } from '../shared/pet';

@Injectable()
export class PetService {

    private pets: Pet[];
    favouritePet: Pet;

    constructor(){
        this.pets = [
            new Pet(1, 'Tom', 'himalayan', 'Likes to play', new Date(1993, 11, 16)),
            new Pet(2, 'Foo', 'regdoll', 'Very friendly, likes people so much', new Date(2014, 5, 26)),
            new Pet(3, 'Sparkles', 'regdoll', 'Very lazy animal', new Date(2015, 11, 16))
        ];
    }
    
    getPetList(): Pet[] {
        return this.pets;
    }

    getPet(id: number): Pet | undefined {
        return this.pets.find(c => c.id === id);
    }
}
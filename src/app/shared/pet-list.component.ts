import { Pet } from "./pet";
import { Output, EventEmitter, Component, OnInit } from "@angular/core";
import { PetService } from "../core/pet.service";

@Component({
    selector: 'pet-list',
    templateUrl: './pet-list.component.html'
})
export class PetListComponent implements OnInit {
    pets: Pet[];
    @Output() selectedPet: EventEmitter<Pet>;

    constructor(private petService: PetService){
        this.selectedPet = new EventEmitter<Pet>();
    }

    ngOnInit(): any {
        this.pets = this.petService.getPetList();
    }

    selectPet(pet: Pet){
        this.selectedPet.emit(pet);
    }
}
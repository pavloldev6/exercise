import { Component, OnInit } from '@angular/core';
import { Pet } from './shared/pet';
import { PetService } from './core/pet.service';

@Component({
  selector: 'herding-cats',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  title = 'app';
  cats: Cat[];
  selectedCat: Cat;
  favouriteCat: Cat;

  constructor(private petService: PetService){ }

  ngOnInit(){
    this.cats = this.petService.getPetList(); 
    this.favouriteCat = this.petService.favouritePet;
  }

  selectCat(cat: Cat): void {
    this.selectedCat = cat;
  }

  selectFavourite(event){
    this.favouriteCat = event;
    this.petService.favouritePet = this.favouriteCat;
  }
}

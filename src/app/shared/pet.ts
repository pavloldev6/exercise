export class Pet {

    id: number;
    name: string;
    breed: string;
    description: string;
    birthday: Date;

    constructor(id: number, name: string, breed: string, description: string, birthday: Date){
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.description = description;
        this.birthday = birthday;
    }
}
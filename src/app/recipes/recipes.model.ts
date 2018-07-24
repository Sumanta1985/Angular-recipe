import { Ingredients } from "../shared/ingredient.model";

export class Recipe{
    name:string;
    description:string;
    image:string;
    ingredients: Ingredients[];

    constructor(name:string,description:string,image:string,ingredients:Ingredients[]){
        this.name=name;
        this.description=description;
        this.image=image;
        this.ingredients=ingredients
    }

}
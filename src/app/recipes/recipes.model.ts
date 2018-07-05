export class Recipe{
    name:string;
    description:string;
    image:string;
    ingredients:string

    constructor(name:string,description:string,image:string,ingredients:string){
        this.name=name;
        this.description=description;
        this.image=image;
        this.ingredients=ingredients
    }

}
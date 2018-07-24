import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeNewComponent } from "./recipes/recipe-new/recipe-new.component";

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipe',pathMatch:'full'},
    {path:'recipe',component:RecipesComponent,children:[
        {path:'',component:RecipeNewComponent},
        {path:'new',component:RecipeNewComponent},
        {path:':id',component:RecipeDetailComponent},
        {path:':id/edit',component:RecipeNewComponent}
    ]},
    {path:'shoppinglist',component:ShoppingListComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
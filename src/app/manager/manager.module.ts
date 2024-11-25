import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list.component';
import { RecipeListComponent } from './recipe/recipe-list.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: '**',
    redirectTo: 'categories',
    pathMatch: 'full'
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }

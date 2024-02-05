import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { LayoutComponent } from './layout.component';

// const routes: Routes = [
//   {path: '', 
//    component: LayoutComponent, 
//    children: [
//     {path: '', redirectTo: 'home', pathMatch: 'full'},
//     {path: 'home', component: LandingPageComponent},
//     {path: 'recipe', component: RecipePageComponent}

// ]}
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'recipe', component: RecipePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {}
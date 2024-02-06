import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
// import { RecipePageComponent } from './layout/recipe-page/recipe-page.component';

const routes: Routes = [
  {path: 'landing', component: LandingPageComponent},
  // { path: './recipe-page', component: RecipePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

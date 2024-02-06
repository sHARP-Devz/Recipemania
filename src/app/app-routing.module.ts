import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { RecipePageComponent } from './layout/recipe-page/recipe-page.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  // {path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)}
  // {path: '', component: LayoutComponent, children: [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component: LandingPageComponent},
    {path: 'recipe', component: RecipePageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

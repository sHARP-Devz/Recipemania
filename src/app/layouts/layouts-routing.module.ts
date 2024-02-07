import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: 'home', component: LandingPageComponent },
      { path: 'recipe', component: RecipePageComponent },
      { path: 'blogs', component: BlogsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsDescriptionComponent } from './blogs-description/blogs-description.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FirstRecipeComponent } from './first-recipe/first-recipe.component';
import { UserRecipeComponent } from './user-recipe/user-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: 'home', component: LandingPageComponent },
      { path: 'recipe', component: RecipePageComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'blog', component: BlogsDescriptionComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'user-dashboard', component: UserDashboardComponent },
      {path: 'first-recipe', component: FirstRecipeComponent},
      { path: 'userrecipe', component: UserRecipeComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { ModalComponent } from '../shared/components/modal/modal.component';
import { LoginComponent } from '../auth/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { CategoriesComponent } from '../shared/components/categories/categories.component';
import { FootcatComponent } from '../shared/components/footcat/footcat.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TitleBlockComponent } from '../shared/components/title-block/title-block.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsDescriptionComponent } from './blogs-description/blogs-description.component';
import { SocialsComponent } from '../shared/components/socials/socials.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { PrimaryButtonComponent } from '../shared/components/primary-button/primary-button.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCardComponent } from '../shared/components/user-card/user-card.component';
import { UserRecipeComponent } from './user-recipe/user-recipe.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FirstRecipeComponent } from './first-recipe/first-recipe.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    LandingPageComponent,
    RecipePageComponent,
    ContactUsComponent,
    BlogsDescriptionComponent,
    BlogsComponent,
    UserRecipeComponent,
    UserDashboardComponent,
    FirstRecipeComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MatIconModule,
    ModalComponent,
    LoginComponent,
    CategoriesComponent,
    FootcatComponent,
    TitleBlockComponent,
    UserCardComponent,
    YouTubePlayerModule,
    SocialsComponent,
    FooterComponent,
    PrimaryButtonComponent,
    NavbarComponent,
    UserCardComponent
  ],
  exports: [LandingPageComponent, RecipePageComponent, UserRecipeComponent],
})
export class LayoutsModule {}

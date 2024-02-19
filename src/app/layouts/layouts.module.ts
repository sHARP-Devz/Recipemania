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
import { blogsData } from './blogs/blogsData';
import { BlogsDescriptionComponent } from './blogs-description/blogs-description.component';
import { NavbarModule } from '../shared/components/navbar/navbar/navbar.module';

@NgModule({
  declarations: [
    LayoutsComponent,
    LandingPageComponent,
    RecipePageComponent,
    ContactUsComponent,
    BlogsDescriptionComponent,
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
    BlogsComponent,
    NavbarModule,
  ],
  exports: [LandingPageComponent, RecipePageComponent],
})
export class LayoutsModule {}

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


@NgModule({
  declarations: [
    LayoutsComponent,
    LandingPageComponent,
    RecipePageComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MatIconModule,
    ModalComponent,
    LoginComponent,
    CategoriesComponent,
    FootcatComponent
  ],
  exports: [
    LandingPageComponent,
    RecipePageComponent

  ]
})
export class LayoutsModule { }

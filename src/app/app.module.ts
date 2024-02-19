import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { MatIconModule } from '@angular/material/icon';
=======



import { MatIconModule } from '@angular/material/icon'
>>>>>>> d584fd92c9970f18cebbe0f28164fef816c289cd
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { FootcatComponent } from './shared/components/footcat/footcat.component';
import { BlogsDescriptionComponent } from './layouts/blogs-description/blogs-description.component';
import { NavbarModule } from './shared/components/navbar/navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    // BlogsDescriptionComponent,
    // NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CategoriesComponent,
    FootcatComponent,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

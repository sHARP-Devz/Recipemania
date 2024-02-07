import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/components/modal/modal.component';
// import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
// import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { FootcatComponent } from './shared/components/footcat/footcat.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { BlogsComponent } from './layouts/blogs/blogs.component';
// Modules
import { AuthModule } from './auth/auth.module';
import { LayoutsModule } from './layouts/layouts.module';

import { HeadingComponent } from './shared/components/heading/heading.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CategoriesComponent,
    FootcatComponent,
    HeadingComponent,
    BlogsComponent,

    // LayoutsModule,
    // AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

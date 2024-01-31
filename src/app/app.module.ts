import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
<<<<<<< HEAD:Frontend/src/app/app.module.ts
import { ModalComponent } from './shared/components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipePageComponent } from './layout/recipe-page/recipe-page.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
>>>>>>> 532273cd79ea44a86e725e36c75883ecfe92571e:src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthComponent,
    ModalComponent,
<<<<<<< HEAD:Frontend/src/app/app.module.ts
    RecipePageComponent

=======
    LoginComponent,
    RegisterComponent,
    LandingPageComponent
>>>>>>> 532273cd79ea44a86e725e36c75883ecfe92571e:src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

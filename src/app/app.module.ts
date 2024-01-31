import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon'
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { LandingPageComponent } from './layout/landing-page/landing-page.component';

// Modules
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';






@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    AuthModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

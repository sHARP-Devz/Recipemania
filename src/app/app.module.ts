import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LayoutComponent } from './layout/layout.component';



// Modules
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { FooterComponent } from './shared/components/footer/footer.component';



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
    LayoutModule,
    // FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

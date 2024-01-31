import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';


@NgModule({
    declarations: [
      LandingPageComponent,
      RecipePageComponent
    ],
    imports: [
      MatIconModule,
      CommonModule
    ],

    exports: [
      LandingPageComponent,
      RecipePageComponent
    ],
    providers: []
    
  })

  export class LayoutModule {}

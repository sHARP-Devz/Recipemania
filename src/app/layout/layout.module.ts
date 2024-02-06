import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SocialsComponent } from '../shared/components/socials/socials.component';


@NgModule({
    declarations: [
      LandingPageComponent,
      RecipePageComponent
    ],
    imports: [
      MatIconModule,
      CommonModule,
      FooterComponent,
      SocialsComponent
    ],

    exports: [
      LandingPageComponent,
      RecipePageComponent
    ],
    providers: []
    
  })

  export class LayoutModule {}

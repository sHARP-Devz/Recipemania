import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';


@NgModule({
    declarations: [
      // LandingPageComponent,
      RecipePageComponent
    ],
    imports: [
      MatIconModule
    ],
    providers: [],
  })

  export class LayoutModule {}

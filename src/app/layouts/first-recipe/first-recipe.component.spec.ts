import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRecipeComponent } from './first-recipe.component';

describe('FirstRecipeComponent', () => {
  let component: FirstRecipeComponent;
  let fixture: ComponentFixture<FirstRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstRecipeComponent]
    });
    fixture = TestBed.createComponent(FirstRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

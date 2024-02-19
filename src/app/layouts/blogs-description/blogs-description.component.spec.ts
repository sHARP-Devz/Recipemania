import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsDescriptionComponent } from './blogs-description.component';

describe('BlogsDescriptionComponent', () => {
  let component: BlogsDescriptionComponent;
  let fixture: ComponentFixture<BlogsDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsDescriptionComponent]
    });
    fixture = TestBed.createComponent(BlogsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

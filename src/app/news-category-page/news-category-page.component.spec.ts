import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCategoryPageComponent } from './news-category-page.component';

describe('NewsCategoryPageComponent', () => {
  let component: NewsCategoryPageComponent;
  let fixture: ComponentFixture<NewsCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

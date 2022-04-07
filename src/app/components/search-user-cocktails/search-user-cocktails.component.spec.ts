import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserCocktailsComponent } from './search-user-cocktails.component';

describe('SearchUserCocktailsComponent', () => {
  let component: SearchUserCocktailsComponent;
  let fixture: ComponentFixture<SearchUserCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserCocktailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

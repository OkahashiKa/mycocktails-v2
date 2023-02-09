import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDetailDialogComponent } from './cocktail-detail-dialog.component';

describe('CocktailDetailDialogComponent', () => {
  let component: CocktailDetailDialogComponent;
  let fixture: ComponentFixture<CocktailDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocktailDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

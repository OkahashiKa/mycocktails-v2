import { TestBed } from '@angular/core/testing';

import { SupabaseCocktailService } from './supabase-cocktail.service';

describe('SupabaseCocktailService', () => {
  let service: SupabaseCocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseCocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

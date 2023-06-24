import { TestBed } from '@angular/core/testing';

import { SupabaseMaterialService } from './supabase-material.service';

describe('SupabaseMaterialService', () => {
  let service: SupabaseMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

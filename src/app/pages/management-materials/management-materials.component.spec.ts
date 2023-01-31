import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMaterialsComponent } from './management-materials.component';

describe('ManagementMaterialsComponent', () => {
  let component: ManagementMaterialsComponent;
  let fixture: ComponentFixture<ManagementMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

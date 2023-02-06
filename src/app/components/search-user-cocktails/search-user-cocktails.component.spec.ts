import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchUserCocktailsComponent } from './search-user-cocktails.component';
import { MatDialog } from '@angular/material/dialog';
import { MaterialsService } from '@/services/materials.service';
import { CocktailsService } from '@/services/cocktails.service';
import { MaterialModel } from '@/models/material/materialModel';
import { of } from 'rxjs';
import { CocktailModel } from '@/models/cocktail/cocktailModel';

fdescribe('SearchUserCocktailsComponent', () => {
  let component: SearchUserCocktailsComponent;
  let fixture: ComponentFixture<SearchUserCocktailsComponent>;

  // @note: テストデータ
  const userMaterialList: MaterialModel[] = [
    {
      material_id: 1,
      material_name: '',
      category_id: 1,
      category_name: '',
    },
  ];

  const userCocktailList: CocktailModel[] = [
    {
      id: 1,
      name: '',
      remarks: '',
      image: '',
    },
  ];

  // ダイアログのモック
  class MatDialogMock {
    open() {
      return '';
    }
  }

  const matDialog = new MatDialogMock();

  // @note サービスのモック
  const materialsServiceMock = {
    getUserMaterialList: () => of(userMaterialList),
  };
  const cocktailsServiceMock = {
    getUserCocktailsList: () => of(userCocktailList),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchUserCocktailsComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: matDialog,
        },
        {
          provide: MaterialsService,
          useValue: materialsServiceMock,
        },
        {
          provide: CocktailsService,
          useValue: cocktailsServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('userMaterialListにServiceから取得した値が設定されている。', () => {
      expect(component.userMaterialList).toBe(userMaterialList);
    });
    it('userCocktailListにServiceから取得した値が設定されている。', () => {
      expect(component.userCocktailList).toBe(userCocktailList);
    });
  });

  describe('openCocktailDetailDialog', () => {
    it('ダイアログが開くこと', () => {
      spyOn(matDialog, 'open');
      component.openCocktailDetailDialog();
      expect(matDialog.open).toHaveBeenCalled();
    });
  });
});

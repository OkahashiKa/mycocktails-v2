import { TestBed } from '@angular/core/testing';
import { CocktailsService } from '@/services/cocktails.service';
import { CocktailModel } from '@/models/cocktail/cocktailModel';
import { SupabaseCocktailService } from '@/services/supabase/supabase-cocktail.service';
import { CocktailResipeModel } from '@/models/cocktail/cocktailRecipeModel';

describe('CocktailsService', () => {
  let service: CocktailsService;

  // @note テストデータ
  let cocktailIdWithUserMaterialInRecipe: number[] = [];
  let cocktailRecipeList: CocktailResipeModel[] = [];
  let userCocktailList: CocktailModel[] = [];

  // @note: サービスモック
  const supabaseCocktailServiceMock = {
    getCocktailIdWithUserMaterialInRecipe: async () =>
      await cocktailIdWithUserMaterialInRecipe,
    getCocktailRecipe: async () => await cocktailRecipeList,
    getCocktailByIdList: async () => await userCocktailList,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SupabaseCocktailService,
          useValue: supabaseCocktailServiceMock,
        },
      ],
    });
    service = TestBed.inject(CocktailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserCocktailsList', () => {
    describe('ユーザー材料を含むレシピが存在しない', () => {
      it('空配列が取得されること', () => {
        service.getUserCocktailsList([]).subscribe((x) => {
          expect(x).toEqual([]);
        });
      });
    });
    describe('ユーザー材料を含むレシピが存在する', () => {
      beforeEach(() => {
        cocktailIdWithUserMaterialInRecipe = [1, 2];
      });
      describe('レシピ情報が存在しない', () => {
        it('空配列が取得されること', () => {
          service.getUserCocktailsList([]).subscribe((x) => {
            expect(x).toEqual([]);
          });
        });
      });
      describe('レシピ情報が存在する', () => {
        beforeEach(() => {
          cocktailRecipeList = [{ cocktail_id: 1, material_id: 1 }];
        });
        describe('ユーザーが作成可能なカクテルが存在しない', () => {
          it('空配列が取得されること', () => {
            service.getUserCocktailsList([]).subscribe((x) => {
              expect(x).toEqual([]);
            });
          });
        });
        describe('ユーザーが作成可能なカクテルが存在する', () => {
          beforeEach(() => {
            userCocktailList = [
              { id: 1, name: 'test', remarks: '', image: '' },
            ];
          });
          it('カクテル情報が取得されること', () => {
            service.getUserCocktailsList([]).subscribe((x) => {
              expect(x).toEqual(userCocktailList);
            });
          });
        });
      });
    });
  });
});

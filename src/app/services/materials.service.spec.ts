import { TestBed, fakeAsync } from '@angular/core/testing';
import { MaterialsService } from '@/services/materials.service';
import { MaterialModel } from '@/models/material/materialModel';
import { SupabaseMaterialService } from '@/services/supabase/supabase-material.service';

xdescribe('MaterialsService', () => {
  let service: MaterialsService;

  // @note テストデータ
  let getMaterialListRes: MaterialModel[] = [];
  let getUserMaterialIdListRes: number[] = [];
  let getMaterialByIdListRes: MaterialModel[] = [];

  // @note: サービスモック
  const supabaseMaterialServiceMock = {
    getMaterialList: async () => await getMaterialListRes,
    getUserMaterialIdList: async () => await getUserMaterialIdListRes,
    getMaterialByIdList: async () => await getMaterialByIdListRes,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SupabaseMaterialService,
          useValue: supabaseMaterialServiceMock,
        },
      ],
    });
    service = TestBed.inject(MaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMaterialsList', () => {
    describe('材料が存在しない', () => {
      it('空配列が取得されること', () => {
        service.getMaterialsList().subscribe((x) => {
          expect(x).toEqual([]);
        });
      });
    });
    describe('材料が存在する', () => {
      beforeEach(() => {
        getMaterialListRes = [
          {
            material_id: 1,
            material_name: '',
            category_id: 1,
            category_name: '',
          },
        ];
      });
      it('材料情報リストが取得されること', () => {
        service.getMaterialsList().subscribe((x) => {
          expect(x).toEqual(getMaterialListRes);
        });
      });
    });
  });

  describe('getUserMaterialList', () => {
    describe('対象のユーザー材料IDリストが存在しない', () => {
      beforeEach(() => {
        getUserMaterialIdListRes = [];
      });
      it('空配列が取得されること', () => {
        service.getUserMaterialList('').subscribe((x) => {
          expect(x).toEqual([]);
        });
      });
    });
    describe('対象のユーザー材料IDリストが存在する', () => {
      beforeEach(() => {
        getUserMaterialIdListRes = [1, 2];
      });
      describe('ユーザー材料リストが存在しない', () => {
        it('空配列が取得されること', () => {
          service.getUserMaterialList('').subscribe((x) => {
            expect(x).toEqual([]);
          });
        });
      });
    });
    describe('ユーザー材料リストが存在する', () => {
      beforeEach(() => {
        getMaterialByIdListRes = [
          {
            material_id: 1,
            material_name: '',
            category_id: 1,
            category_name: '',
          },
        ];
      });
      it('ユーザー材料リストが取得されること', () => {
        service.getUserMaterialList('').subscribe((x) => {
          expect(x).toEqual(getMaterialByIdListRes);
        });
      });
    });
  });
});

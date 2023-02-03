import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModel } from '@/models/material/materialModel';
import { CocktailModel } from '@/models/cocktail/cocktailModel';
import { CocktailDetailDialogComponent } from '@/components/cocktail-detail-dialog/cocktail-detail-dialog.component';
import { MaterialsService } from '@/services/materials.service';
import { CocktailsService } from '@/services/cocktails.service';

export interface CocktailDetailDialogData {
  cocktailId: number;
}

@Component({
  selector: 'app-search-user-cocktails',
  templateUrl: './search-user-cocktails.component.html',
  styleUrls: ['./search-user-cocktails.component.scss'],
})
export class SearchUserCocktailsComponent implements OnInit {
  public userMaterialList: MaterialModel[] = [];
  public userCocktailList: CocktailModel[] = [];

  constructor(
    private dialog: MatDialog,
    private materialService: MaterialsService,
    private cocktailService: CocktailsService
  ) {}

  ngOnInit(): void {
    // @note: ユーザー材料の取得
    this.materialService
      .getUserMaterialList('kazuki.okahashi')
      .subscribe((userMaterialList) => {
        this.userMaterialList = userMaterialList;

        const userMaterialIdList = userMaterialList.map(
          (userMaterial) => userMaterial.material_id
        ) as number[];

        // @note: ユーザーカクテルの取得
        this.cocktailService
          .getUserCocktailsList(userMaterialIdList)
          .subscribe(
            (UserCocktailList) => (this.userCocktailList = UserCocktailList)
          );
      });
  }

  openCocktailDetailDialog(cocktailId?: number) {
    this.dialog.open(CocktailDetailDialogComponent, {
      width: '250',
      data: {
        cocktailId: cocktailId,
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModel } from 'src/app/models/material/materialModel';
import { MaterialAction } from 'src/app/stores/materials/materials.action';
import { MaterialSelector } from 'src/app/stores/materials/materials.selector';
import { CocktailSelector } from 'src/app/stores/cocktails/cocktails.selector';
import { CocktailModel } from 'src/app/models/cocktail/cocktailModel';
import { SearchCocktailConditionModel } from 'src/app/models/cocktail/searchCocktailConditionModel';
import { CocktailAction } from 'src/app/stores/cocktails/cocktails.action';
//import { CocktailDetailDialogComponent } from 'src/app/component/dialog/cocktail-detail-dialog/cocktail-detail-dialog.component';

export interface CocktailDetailDialogData {
  cocktailId: number;
}

@Component({
  selector: 'app-search-user-cocktails',
  templateUrl: './search-user-cocktails.component.html',
  styleUrls: ['./search-user-cocktails.component.scss'],
})
export class SearchUserCocktailsComponent implements OnInit {
  @Select(MaterialSelector.userMaterialList) userMaterialList$!: Observable<
    MaterialModel[]
  >;
  @Select(CocktailSelector.userCocktailList) userCocktailList$!: Observable<
    CocktailModel[]
  >;

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUserMaterialList();
    this.userMaterialList$.subscribe((um) =>
      this.getUserCocktail({
        searchString: '',
        materialIdList: um.map((um) => um.material_id) as number[],
        materialSearchType: 'AND',
      })
    );
  }

  getUserMaterialList(): void {
    // this.store.dispatch(
    //   new MaterialAction.GetUserMaterialList('kazuki.okahashi')
    // );
  }

  getUserCocktail(searchCocktailCondition: SearchCocktailConditionModel): void {
    this.store.dispatch(
      new CocktailAction.SearchCocktail(searchCocktailCondition)
    );
  }

  openCocktailDetailDialog(cocktailId?: number) {
    // this.dialog.open(CocktailDetailDialogComponent, {
    //   width: '250',
    //   data: {
    //     cocktailId: cocktailId,
    //   },
    // });
  }
}

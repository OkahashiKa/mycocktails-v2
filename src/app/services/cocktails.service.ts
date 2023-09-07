import { Injectable } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { CocktailModel } from '@/models/cocktail/cocktailModel';
import { SupabaseCocktailService } from '@/services/supabase/supabase-cocktail.service';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  constructor(private supabaseCocktailService: SupabaseCocktailService) {}

  /**
   * カクテルIDリストに紐づくカクテルのリストを取得する
   * @param cocktailIdList  カクテルIDリスト
   * @returns カクテル情報リスト
   */
  getCocktail(cocktailIdList: Number[]): Observable<CocktailModel[]> {
    return defer(async () => {
      return await this.supabaseCocktailService.getCocktailById(cocktailIdList);
    });
  }

  /**
   * ユーザーが作成可能なカクテルリストを取得する
   * @param userMaterialIdList
   * @returns 作成可能カクテルリスト
   */
  getUserCocktailsList(
    userMaterialIdList: number[]
  ): Observable<CocktailModel[]> {
    return defer(async () => {
      const cocktailIdWithUserMaterialInRecipe =
        await this.supabaseCocktailService.getCocktailIdWithUserMaterialInRecipe(
          userMaterialIdList
        );

      // @note: ユーザー材料が含まれるレシピが存在しない場合、空配列を返す
      if (!cocktailIdWithUserMaterialInRecipe.length) return [];

      // @note: 現状SupabaseのQueryBuilderにDistinctやGroupByは無いようなので取得後に重複排除する
      const distinctCocktailIdWithUserMaterialInRecipe = Array.from(
        new Set(cocktailIdWithUserMaterialInRecipe)
      );

      const cocktailRecipeList =
        await this.supabaseCocktailService.getCocktailRecipe();

      // @note: レシピが取得できなかった場合、空配列を返す
      if (!cocktailRecipeList.length) return [];

      // @note: ユーザーが作成可能なカクテルIDリスト
      const userCocktailIdList: number[] = [];

      // @note: 候補カクテルが作成可能かの検証を行う
      distinctCocktailIdWithUserMaterialInRecipe.forEach((cocktailId) => {
        // @note: 対象カクテルの材料IDリストを取得する
        const targetMaterialIdList = cocktailRecipeList
          .filter((x) => x.cocktail_id === cocktailId)
          .map((x) => x.material_id);

        // @note: 候補のカクテルの材料が、引数のユーザー材料に含まれているか検証する
        if (targetMaterialIdList.every((el) => userMaterialIdList.includes(el)))
          userCocktailIdList.push(cocktailId);

        return;
      });

      return await this.supabaseCocktailService.getCocktailByIdList(
        userCocktailIdList
      );
    });
  }
}

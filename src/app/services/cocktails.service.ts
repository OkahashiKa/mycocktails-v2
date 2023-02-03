import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { defer, Observable } from 'rxjs';
import { CocktailModel } from '@/models/cocktail/cocktailModel';
import { SearchCocktailConditionModel } from '@/models/cocktail/searchCocktailConditionModel';
import { supabase } from '@/libs/supabase/supabase-client';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  private readonly BASE_PATH = 'aaa' + 'cocktails';

  constructor(private httpClient: HttpClient) {}

  getCocktail(cocktailId: number): Observable<CocktailModel> {
    return this.httpClient.get<CocktailModel>(
      `${this.BASE_PATH}/${cocktailId}`
    );
  }

  getCocktailsList(): Observable<CocktailModel[]> {
    return this.httpClient.get<CocktailModel[]>(`${this.BASE_PATH}`);
  }

  getUserCocktailsList(
    userMaterialIdLst: number[]
  ): Observable<CocktailModel[]> {
    return defer(async () => {
      return await this.getUserCocktailsListFromSupabase(userMaterialIdLst);
    });
  }

  searchCocktail(
    searchCocktailCondition: SearchCocktailConditionModel
  ): Observable<CocktailModel[]> {
    return {} as Observable<CocktailModel[]>;
  }

  private async getUserCocktailsListFromSupabase(
    userMaterialIdList: number[]
  ): Promise<CocktailModel[]> {
    // @note: レシピテーブルから材料にユーザー材料が含まれるカクテルのIDを取得する
    const { data, error } = await supabase
      .from('m_cocktail_recipi')
      .select('cocktail_id')
      .in('material_id', userMaterialIdList);

    // @note: カクテルIDが取得できない場合は空配列を返す
    if (!data) {
      return [];
    }

    // @note: オブジェクトからnumber[]に変換
    const targetCocktailIdList = data.map((v) => v.cocktail_id);

    // @note: 現状SupabaseのQueryBuilderにDistinctやGroupByは無いようなので取得後に重複排除する
    const distinctTargetCocktailIdList = Array.from(
      new Set(targetCocktailIdList)
    );

    // @note: カクテルレシピの情報を全件取得する
    const { data: cocktailRecipiList } = await supabase
      .from('m_cocktail_recipi')
      .select('material_id, cocktail_id');

    if (!cocktailRecipiList) {
      return [];
    }

    // @note: ユーザーが作成可能なカクテルのIDリスト
    const userCocktailIdList: number[] = [];

    // @note: 候補カクテルが作成可能かの検証を行う
    distinctTargetCocktailIdList.forEach((cocktailId) => {
      // @note: 対象カクテルの材料IDリストを取得する
      const targetMaterialIdList = cocktailRecipiList
        .filter((v) => v.cocktail_id === cocktailId)
        .map((v) => v.material_id);

      // @note: 候補のカクテルの材料が、引数のユーザー材料に含まれているか検証する
      const isAllInclude = targetMaterialIdList.every((el) =>
        userMaterialIdList.includes(el)
      );

      if (isAllInclude) {
        userCocktailIdList.push(cocktailId);
      }
      return;
    });

    // @note: ユーザーが作成可能なカクテルリストの取得
    if (!userCocktailIdList) {
      return [];
    }

    const { data: userCocktailList } = await supabase
      .from('m_cocktail')
      .select('id, name, remarks, image')
      .in('id', userCocktailIdList);

    return userCocktailList ? userCocktailList : [];
  }
}

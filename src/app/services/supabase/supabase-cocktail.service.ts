import { Injectable } from '@angular/core';
import { supabase } from '@/libs/supabase/supabase-client';
import { CocktailModel } from '@/models/cocktail/cocktailModel';
import { CocktailResipeModel } from '@/models/cocktail/cocktailRecipeModel';

@Injectable({
  providedIn: 'root',
})
export class SupabaseCocktailService {
  /**
   * SubaoaseからカクテルIDに紐づくカクテル情報を取得する
   * @param cocktailIdList カクテルIDリスト
   * @returns カクテル情報
   */
  public async getCocktailById(
    cocktailIdList: Number[]
  ): Promise<CocktailModel[]> {
    const { data } = await supabase
      .from('m_cocktail')
      .select('id, name, remarks, image')
      .in('id', cocktailIdList);

    return data as CocktailModel[];
  }

  /**
   * SupabaseからカクテルIDリストに紐づくカクテル情報を取得する
   * @param cocktailIdList カクテルIDリスト
   * @returns カクテル情報
   */
  public async getCocktailByIdList(
    cocktailIdList: number[]
  ): Promise<CocktailModel[]> {
    const { data } = await supabase
      .from('m_cocktail')
      .select('id, name, remarks, image')
      .in('id', cocktailIdList);

    // @note: カクテル情報が取得できない場合は空配列を返す
    if (!data || !data.length) {
      return [];
    }

    // オブジェクトからCocktailModel[]に変換
    return data as CocktailModel[];
  }

  /**
   * Supabaseからユーザー材料がレシピに含まれるカクテルのIDリストを取得する
   * @param userMaterialIdList ユーザー材料IDリスト
   * @returns 候補カクテルIDリスト
   */
  public async getCocktailIdWithUserMaterialInRecipe(
    userMaterialIdList: number[]
  ): Promise<number[]> {
    const { data, error } = await supabase
      .from('m_cocktail_recipi')
      .select('cocktail_id')
      .in('material_id', userMaterialIdList);

    // @note: カクテルIDが取得できない場合は空配列を返す
    if (!data || !data.length) {
      return [];
    }

    // @note: オブジェクトからnumber[]に変換
    return data.map((v) => v.cocktail_id) as number[];
  }

  /**
   * Supabaseからカクテルレシピリストを取得する
   * @returns カクテルレシピリスト
   */
  public async getCocktailRecipe(): Promise<CocktailResipeModel[]> {
    const { data } = await supabase
      .from('m_cocktail_recipi')
      .select('material_id, cocktail_id');

    return data as CocktailResipeModel[];
  }
}

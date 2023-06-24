import { supabase } from '@/libs/supabase/supabase-client';
import { MaterialModel } from '@/models/material/materialModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SupabaseMaterialService {
  /**
   * Supabaseから材料リストを取得する
   * @returns 材料リスト Promise<MaterialModel[]>
   */
  public async getMaterialList(): Promise<MaterialModel[]> {
    const { data, error } = await supabase.from('v_material').select('*');

    // @note: 取得できなかった場合はから配列を返す
    if (!data || !data.length) return [];

    // @note: オブジェクトからMaterialModel[]に変換
    return data as MaterialModel[];
  }

  /**
   * Supabaseから材料IDリストに紐づく材料リストを取得する
   * @param materialIdList 材料IDリスト
   * @returns 材料リスト
   */
  public async getMaterialByIdList(
    materialIdList: number[]
  ): Promise<MaterialModel[]> {
    const { data, error } = await supabase
      .from('v_material')
      .select('*')
      .in('material_id', materialIdList);

    // @note: 取得できなかった場合はから配列を返す
    if (!data || !data.length) return [];

    // @note: オブジェクトからMaterialModel[]に変換
    return data as MaterialModel[];
  }

  /**
   * Supabaseからユーザー材料IDリストを取得する
   * @param userId ユーザーID
   * @returns ユーザー材料IDリスト Promise<number[]>
   */
  public async getUserMaterialIdList(userId: string): Promise<number[]> {
    const { data, error } = await supabase
      .from('t_user_material')
      .select('material_id')
      .eq('user_id', userId);

    // @note: 取得できなかった場合はから配列を返す
    if (!data || !data.length) {
      return [];
    }

    // @note: オブジェクトからnumber[]に変換
    return data.map((x) => x.material_id) as number[];
  }
}

import { Injectable } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { MaterialModel } from '@/models/material/materialModel';
import { supabase } from '@/libs/supabase/supabase-client';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  /**
   * 材料リストを取得する
   *
   * @returns 材料リスト Observable<MaterialModel[]>
   */
  getMaterialsList(): Observable<MaterialModel[]> {
    return defer(async () => {
      return await this.getMaterialsListFromSupabase();
    });
  }

  /**
   * ユーザー材料リストを取得する
   * @param userId ユーザーID
   * @returns ユーザー材料リスト
   */
  getUserMaterialList(userId: string): Observable<MaterialModel[]> {
    return defer(async () => {
      return await this.getUserMaterialListFromSupabase(userId);
    });
  }

  /**
   * Supabaseから材料リストを取得する
   * @returns 材料リスト Promise<MaterialModel[]>
   */
  public async getMaterialsListFromSupabase(): Promise<MaterialModel[]> {
    const { data: materialList, error } = await supabase
      .from('v_material')
      .select('*');

    if (error) {
      console.log(error);
    }

    // @note: 取得できなかった場合はから配列を返す
    return materialList ? materialList : [];
  }

  /**
   * Supabaseからユーザー材料リストを取得する
   *
   * @param userId ユーザーID
   * @returns ユーザー材料リスト Promise<MaterialModel[]>
   */
  private async getUserMaterialListFromSupabase(
    userId: string
  ): Promise<MaterialModel[]> {
    const { data: userMaterialId, error } = await supabase
      .from('t_user_material')
      .select('material_id')
      .eq('user_id', userId);

    if (error) {
      console.log(error);
    }

    // @note: ユーザー材料が取得できなかった場合、空配列を返す
    if (!userMaterialId) {
      return [];
    }

    const userMaterialIdList: number[] = userMaterialId.map(
      (v) => v.material_id
    );

    const { data: userMaterialList } = await supabase
      .from('v_material')
      .select('*')
      .in('material_id', userMaterialIdList);

    // @note: 材料が取得できなかった場合、空配列を返す
    return userMaterialList ? userMaterialList : [];
  }
}

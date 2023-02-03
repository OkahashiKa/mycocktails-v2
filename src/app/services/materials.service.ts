import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { defer, Observable } from 'rxjs';
import { MaterialModel } from '@/models/material/materialModel';
import { MaterialDetailModel } from '@/models/material/materialDetailModel';
import { CommonMessageModel } from '@/models/common/commonMessageModel';
import { UserMaterialModel } from '@/models/material/userMaterialModel';
import { supabase } from '@/libs/supabase/supabase-client';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  private readonly BASE_PATH = 'aaa' + 'materials';

  constructor(private httpClient: HttpClient) {}

  getMaterial(materialId: number): Observable<MaterialDetailModel> {
    return this.httpClient.get<MaterialDetailModel>(
      `${this.BASE_PATH}/${materialId}`
    );
  }

  /**
   * 材料リストを取得する
   *
   * @returns 材料リスト Observable<MaterialModel[]>
   */
  // getMaterialsList(): Observable<MaterialModel[]> {
  //   return defer(async () => {
  //     return await this.getMaterialsListFromSupabase();
  //   });
  // }
  /**
   * ユーザー材料リストを取得する
   *
   * @param userId ユーザーID
   * @returns ユーザー材料リスト
   */
  getUserMaterialList(userId: string): Observable<MaterialModel[]> {
    return defer(async () => {
      return await this.getUserMaterialListFromSupabase(userId);
    });
  }
  createUserMaterial(
    userMaterial: UserMaterialModel
  ): Observable<CommonMessageModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.post<CommonMessageModel>(
      `${this.BASE_PATH}/user_material`,
      userMaterial,
      httpOptions
    );
  }

  deleteUserMaterial(
    userId: string,
    materialId: number
  ): Observable<CommonMessageModel> {
    return this.httpClient.delete<CommonMessageModel>(
      `${this.BASE_PATH}/user_material?userId=${userId}&materialId=${materialId}`
    );
  }

  /**
   * Supabaseから材料リストを取得する
   *
   * @returns 材料リスト Promise<MaterialModel[]>
   */
  public async getMaterialsList(): Promise<MaterialModel[]> {
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { defer, Observable } from 'rxjs';
import { MaterialModel } from 'src/app/models/material/materialModel';
import { MaterialDetailModel } from 'src/app/models/material/materialDetailModel';
import { CommonMessageModel } from 'src/app/models/common/commonMessageModel';
import { UserMaterialModel } from 'src/app/models/material/userMaterialModel';
import { supabase } from 'src/app/libs/supabase/supabase-client';

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

  getMaterialsList(): Observable<MaterialModel[]> {
    return defer(async () => {
      return await this.getMaterialsListFromSupabase();
    });
  }

  getUserMaterialList(userId: string): Observable<MaterialModel[]> {
    return this.httpClient.get<MaterialModel[]>(
      `${this.BASE_PATH}/user_material/${userId}`
    );
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

  private async getMaterialsListFromSupabase(): Promise<MaterialModel[]> {
    // @note Supabaseに接続
    let { data: materialList, error } = await supabase
      .from<MaterialModel>('v_material')
      .select('*');

    console.log(materialList);

    return materialList ? materialList : [];
  }
}

import { Injectable } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { MaterialModel } from '@/models/material/materialModel';
import { SupabaseMaterialService } from './supabase/supabase-material.service';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  constructor(private supabaseMaterialService: SupabaseMaterialService) {}
  /**
   * 材料リストを取得する
   * @returns 材料リスト Observable<MaterialModel[]>
   */
  getMaterialsList(): Observable<MaterialModel[]> {
    return defer(async () => {
      return await this.supabaseMaterialService.getMaterialList();
    });
  }

  /**
   * Supabaseからユーザー材料リストを取得する
   * @param userId ユーザーID
   * @returns ユーザー材料リスト Promise<MaterialModel[]>
   */
  getUserMaterialList(userId: string): Observable<MaterialModel[]> {
    return defer(async () => {
      const userMaterialIdList =
        await this.supabaseMaterialService.getUserMaterialIdList(userId);

      return await this.supabaseMaterialService.getMaterialByIdList(
        userMaterialIdList
      );
    });
  }
}

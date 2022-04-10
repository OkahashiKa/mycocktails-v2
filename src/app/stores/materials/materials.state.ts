import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MaterialModel } from 'src/app/models/material/materialModel';
import { MaterialDetailModel } from 'src/app/models/material/materialDetailModel';
import { MaterialAction } from 'src/app/stores/materials/materials.action';
import { MaterialsService } from 'src/app/services/materials.service';

export interface MaterialStateModel {
  selectedMaterial: MaterialDetailModel | null;
  materialList: MaterialModel[];
  userMaterialList: MaterialModel[];
}

@State<MaterialStateModel>({
  name: 'material',
  defaults: {
    selectedMaterial: null,
    materialList: [],
    userMaterialList: [],
  },
})
@Injectable()
export class MaterialState {
  constructor(private materiallSevice: MaterialsService) {}

  // @Action(MaterialAction.GetMaterial)
  // getMaterial(
  //   ctx: StateContext<MaterialStateModel>,
  //   action: MaterialAction.GetMaterial
  // ) {
  //   return this.materiallSevice.getMaterial(action.materialId).pipe(
  //     tap((result) => {
  //       ctx.patchState({
  //         selectedMaterial: result,
  //       });
  //     })
  //   );
  // }

  @Action(MaterialAction.GetMaterialList)
  getMaterialList(ctx: StateContext<MaterialStateModel>) {
    return this.materiallSevice.getMaterialsList().pipe(
      tap((result) => {
        ctx.patchState({ materialList: result });
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }

  // @Action(MaterialAction.GetUserMaterialList)
  // getUserMaterialList(
  //   ctx: StateContext<MaterialStateModel>,
  //   action: MaterialAction.GetUserMaterialList
  // ) {
  //   return this.materiallSevice.getUserMaterialList(action.userId).pipe(
  //     tap((data) => {
  //       ctx.patchState({ userMaterialList: data });
  //     })
  //   );
  // }
}

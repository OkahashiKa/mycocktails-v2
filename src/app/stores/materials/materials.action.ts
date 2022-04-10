export enum MaterialActionType {
  GetMaterial = '[Material] Get Material',
  GetMaterialList = '[Material] Get Material List',
  GetUserMaterialList = '[Material] Get User Material List',
}

export namespace MaterialAction {
  // export class GetMaterial {
  //   static readonly type = MaterialActionType.GetMaterial;
  //   constructor(public materialId: number) {}
  // }

  export class GetMaterialList {
    static readonly type = MaterialActionType.GetMaterialList;
  }

  // export class GetUserMaterialList {
  //   static readonly type = MaterialActionType.GetUserMaterialList;
  //   constructor(public userId: string) {}
  // }
}

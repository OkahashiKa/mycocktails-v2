import { SearchCocktailConditionModel } from '@/models/cocktail/searchCocktailConditionModel';

export enum CocktailActionType {
  GetCocktail = '[Cocktail] Get Cocktail',
  GetCocktailList = '[Cocktail] Get Cocktail List',
  GetUserCocktailList = '[Cocktail] Get User Cocktail List',
  SearchCocktail = '[Cocktail] Search Cocktail List',
}

export namespace CocktailAction {
  export class GetCocktail {
    static readonly type = CocktailActionType.GetCocktail;
    constructor(public cocktailId: number) {}
  }

  export class GetCocktailList {
    static readonly type = CocktailActionType.GetCocktailList;
  }

  export class GetUserCocktailList {
    static readonly type = CocktailActionType.GetUserCocktailList;
    constructor(public userMaterialIdList: number[]) {}
  }

  export class SearchCocktail {
    static readonly type = CocktailActionType.SearchCocktail;
    constructor(public searchCocktailCondition: SearchCocktailConditionModel) {}
  }
}

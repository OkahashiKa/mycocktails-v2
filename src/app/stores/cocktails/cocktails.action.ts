import { SearchCocktailConditionModel } from 'src/app/models/cocktail/searchCocktailConditionModel';

export enum CocktailActionType {
  GetCocktail = '[Cocktail] Get Cocktail',
  GetCocktailList = '[Cocktail] Get Cocktail List',
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

  export class SearchCocktail {
    static readonly type = CocktailActionType.SearchCocktail;
    constructor(public searchCocktailCondition: SearchCocktailConditionModel) {}
  }
}

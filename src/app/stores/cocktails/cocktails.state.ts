import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CocktailModel } from 'src/app/models/cocktail/cocktailModel';
import { CocktailAction } from 'src/app/stores/cocktails/cocktails.action';
import { CocktailsService } from 'src/app/services/cocktails.service';

export interface CocktailStateModel {
  selectedCocktail: CocktailModel | null;
  cocktailList: CocktailModel[];
  userCocktailList: CocktailModel[];
}

@State<CocktailStateModel>({
  name: 'cocktail',
  defaults: {
    selectedCocktail: null,
    cocktailList: [],
    userCocktailList: [],
  },
})
@Injectable()
export class CocktailState {
  constructor(private cocktailSevice: CocktailsService) {}

  // @Action(CocktailAction.GetCocktail)
  // getCocktail(
  //   ctx: StateContext<CocktailStateModel>,
  //   action: CocktailAction.GetCocktail
  // ) {
  //   return this.cocktailSevice.getCocktail(action.cocktailId).pipe(
  //     tap((result) => {
  //       ctx.patchState({
  //         selectedCocktail: result,
  //       });
  //     })
  //   );
  // }

  // @Action(CocktailAction.GetCocktailList)
  // getCocktilList({ getState, setState }: StateContext<CocktailStateModel>) {
  //   const state = getState();
  //   return this.cocktailSevice.getCocktailsList().pipe(
  //     tap((result) => {
  //       setState({
  //         ...state,
  //         cocktailList: result,
  //       });
  //     }),
  //     catchError((error) => {
  //       return of(error);
  //     })
  //   );
  // }

  @Action(CocktailAction.GetUserCocktailList)
  getUserCocktilList(
    ctx: StateContext<CocktailStateModel>,
    action: CocktailAction.GetUserCocktailList
  ) {
    return this.cocktailSevice
      .getUserCocktailsList(action.userMaterialIdList)
      .pipe(
        tap((result) => {
          ctx.patchState({ userCocktailList: result });
        }),
        catchError((error) => {
          return of(error);
        })
      );
  }

  // @Action(CocktailAction.SearchCocktail)
  // searchCocktail(
  //   ctx: StateContext<CocktailStateModel>,
  //   action: CocktailAction.SearchCocktail
  // ) {
  //   return this.cocktailSevice
  //     .searchCocktail(action.searchCocktailCondition)
  //     .pipe(
  //       tap((result) => {
  //         ctx.patchState({ userCocktailList: result });
  //       })
  //     );
  // }
}

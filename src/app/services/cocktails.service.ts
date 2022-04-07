import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CocktailModel } from 'src/app/models/cocktail/cocktailModel';
import { SearchCocktailConditionModel } from 'src/app/models/cocktail/searchCocktailConditionModel';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  private readonly BASE_PATH = 'aaa' + 'cocktails';

  constructor(private httpClient: HttpClient) {}

  getCocktail(cocktailId: number): Observable<CocktailModel> {
    return this.httpClient.get<CocktailModel>(
      `${this.BASE_PATH}/${cocktailId}`
    );
  }

  getCocktailsList(): Observable<CocktailModel[]> {
    return this.httpClient.get<CocktailModel[]>(`${this.BASE_PATH}`);
  }

  searchCocktail(
    searchCocktailCondition: SearchCocktailConditionModel
  ): Observable<CocktailModel[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.post<CocktailModel[]>(
      `${this.BASE_PATH}/search`,
      searchCocktailCondition,
      httpOptions
    );
  }
}

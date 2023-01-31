import { MaterialModel } from './materialModel';
import { CocktailModel } from './cocktailModel';

/**
 * material detail info model.
 */
export interface MaterialDetailModel {
  materialInfo?: MaterialModel;
  /**
   * Cocktail info list.
   */
  cocktailList?: Array<CocktailModel>;
}

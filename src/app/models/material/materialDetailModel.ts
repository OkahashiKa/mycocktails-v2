import { MaterialModel } from '@/models/material/materialModel';
import { CocktailModel } from '@/models/material/cocktailModel';

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

/**
 * Search cocktail info condition model.
 */
export type SearchCocktailConditionModel = {
  searchString: string | null;
  /**
   * Material id list.
   */
  materialIdList: number[];
  /**
   * cocktail search type. (AND, OR)
   */
  materialSearchType: string;
};

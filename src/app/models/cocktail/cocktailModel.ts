/**
 * カクテル情報
 */
export interface CocktailModel {
  /**
   * カクテルID
   */
  id?: number;

  /**
   * カクテル名
   */
  name?: string;

  /**
   * カクテル概要
   */
  remarks?: string;

  /**
   * カクテル画像
   */
  image?: string;
}

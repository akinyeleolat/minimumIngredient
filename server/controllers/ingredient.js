/* eslint-disable no-loop-func */
/** ingredient controller class */
import getJSON from 'get-json';
import getMealData from '../models/getMealData';
import getMinimumIngredient from './getMinimumIngredient';

class IngredientController {
  /**
   * @function getMeal return meal with minimum ingredient from themeal.db API
   * @memberof IngredientController
   * @static
   */
  static getMeal(req, res) {
    let id = req.query.mealID.split(',');
    let mealId = [];
    let i;
    const meal = [];
    let menuList;
    const mealData = [];
    const errorMsg = [];
    id.forEach((num) => {
      id = num.toString().replace(/\s+/g, '');
      mealId = [...mealId, (parseInt(id, 10))];
    });
    for (i = 0; i < mealId.length; i += 1) {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId[i]}`;
      getJSON(url)
        .then((response) => {
          if (response) {
            meal[i] = response;
            menuList = getMealData(meal[i], mealId[i], res);
          }
          if (i === mealId.length) {
            mealData.push(menuList);
            if (mealData.length === mealId.length) {
              getMinimumIngredient(mealData, res);
            }
          }
        }).catch((_error) => {
          errorMsg.push(_error);
          if (errorMsg.length === mealId.length) {
            return res.status(400).json(errorMsg);
          }
          return errorMsg;
        });
    }
  }

  /**
   * @function getMealById Get meal information from themealdb.com API by ID
   * @memberof IngredientController
   * @static
   */
  // eslint-disable-next-line consistent-return
  static getMealById(req, res) {
    const { id } = req.params;
    if (!(/^[\d]+$/.test(id))) {
      return res.status(400).json({
        status: 'failed',
        error: 'Invalid meal id, meal id can only be an integer',
      });
    }
    const mealID = Number(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    getJSON(url)
      .then((response) => {
        const meal = response;
        const mealData = getMealData(meal, res);
        return res.status(200).json({
          success: 'true',
          mealData,
        });
      }).catch(error => res.status(400).json({
        success: 'failed',
        error,
      }));
  }
}
export default IngredientController;

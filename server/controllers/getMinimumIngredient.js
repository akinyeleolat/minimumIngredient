/**
   * @function getMinimumIngredients return info about menu with minimum ingredients
   */
const getMinimumIngredients = (mealData, res) => {
  // get array of numIngredients
  const ingredientList = mealData.map(list => list.numIngredients);
  // return least array
  const sorted = ingredientList.sort((a, b) => a - b);
  const leastIngredientNum = sorted[0];
  // use the array to get id of the meal with least ingredients
  const mealMinimumIngredient = mealData.filter(getMin => getMin.numIngredients === leastIngredientNum);
  const getMinId = mealMinimumIngredient[0].id;
  return res.status(200).send({
    minimumIngredientMealId: getMinId,
    ingredientsNum: mealMinimumIngredient[0].numIngredients,
    IngredientList: mealMinimumIngredient[0].ingredients,
  });
};
export default getMinimumIngredients;

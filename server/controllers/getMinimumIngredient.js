/**
   * @function getMinimumIngredients return info about menu with minimum ingredients
   */
const getMinimumIngredients = (mealData, res) => {
  /* get array of numIngredients */
  const ingredientList = mealData.map(list => list.numIngredients);
  /* return least array */
  const sorted = ingredientList.sort((a, b) => a - b);
  const leastIngredientNum = sorted[0];
  /* use the array to get id of the meal with least ingredients */
  const mealMinIngredient = mealData.filter(getMin => getMin.numIngredients === leastIngredientNum);
  const getMinId = mealMinIngredient[0].id;
  const ingredientsNum = mealMinIngredient[0].numIngredients;
  const IngredientList = mealMinIngredient[0].ingredients;
  return res.status(200).send({
    minimumIngredientMealId: getMinId,
    ingredientsNum,
    IngredientList,
  });
};
export default getMinimumIngredients;

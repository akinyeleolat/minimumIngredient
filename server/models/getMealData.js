/**
   * @function getMealData Get meal data from themealdb.com API base on meal information
   */
const getMealData = (meal, res) => {
  if (meal.meals === null || undefined) {
    return res.status(400).json({
      status: 'failed',
      error: 'No meal details for one of the id',
    });
  }
  if (meal.meals.length === 0) {
    return res.status(400).json({
      status: 'failed',
      error: 'No meal details for one of the id',
    });
  }
  const id = parseInt(meal.meals[0].idMeal, 10);
  let i;
  let x;
  let ingredients = [];
  for (i = 1; i <= 20; i++) {
    x = meal.meals[0][`strIngredient${i}`];
    if ((x !== null) && (x !== '')) {
      ingredients = [...ingredients, x];
    }
  }
  const mealData = {
    id,
    numIngredients: (ingredients.length),
    ingredients,
  };
  return mealData;
};

export default getMealData;

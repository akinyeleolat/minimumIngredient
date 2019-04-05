import getJSON from 'get-json';
/**
   * @function getMealInfo Get meal information from themealdb.com API base on mealId
   */
let meal;
const getMealInfo = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  getJSON(url)
    .then((response) => {
      meal = response;
      return meal;
    })
    .catch(error => error);
};
export default getMealInfo;

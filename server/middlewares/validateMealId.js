import * as validate from './validate';
/**
   * This is a validation for party creation
   * @constant
   *
   * @param {Object} req request object
   * @param {Object} res response object
   * @param {Object} next next object
   *
   * @returns {Object} an object containing an error message if validation fails
   *
   * @exports validateMealId
   */
const validateMealId = (req, res, next) => {
  if (req.query.mealID === undefined || req.query.mealID === null || req.query.mealID === '') next(validate.validationError(req, 'Meal Id must be supplied'));
  if (req.error) return next(validate.getErrorMsg(req, res));

  const id = req.query.mealID.split(',');
  let i;

  if (id.length !== 0) {
    for (i = 0; i < id.length; i++) {
      id[i] = id[i].toString().replace(/\s+/g, '');
      if ((!validate.checkNumber(id[i]))) next(validate.validationError(req, 'Invalid meal id found, meal id cannot be an alphabet,symbols but an integer'));
    }
  }
  if (req.error) return next(validate.getErrorMsg(req, res));
  return next();
};
export default validateMealId;

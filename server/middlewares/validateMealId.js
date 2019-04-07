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

  let id = req.query.mealID.split(',');
  if (id.length === 1) next(validate.validationError(req, 'Minimum of two meal ID must be supplied'));
  if (req.error) return next(validate.getErrorMsg(req, res));

  if (id.length > 1) {
    id.forEach((num) => {
      id = num.toString().replace(/\s+/g, '');
      if (!validate.checkNumber(id)) next(validate.validationError(req, `Invalid meal id '${id}' found, meal id cannot be an alphabet,symbols but an integer`));
    });
  }
  if (req.error) return next(validate.getErrorMsg(req, res));
  return next();
};
export default validateMealId;

/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
/**
 * This function check for space.
 * @param {number} value any
 * @returns {boolean} true or false.
 */
export const checkEmpty = (value) => {
  if (value.trim() === '' || (!value)) {
    return true;
  }
};
  /**
       * This function check if the value is a string.
       * @param {string} value any
       * @returns {boolean} true or false.
       */
export const checkString = (value) => {
  if (String(value).match(/[A-Za-z ]/g)) {
    return true;
  }
};
  /**
       * This function check if the value contain sysmbols.
       * @param {number} value any
       * @returns {boolean} true or false.
       */
export const checkSymbol = (value) => {
  if (String(value).match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)) {
    return true;
  }
};

/**
       * This function check if the value contains number.
       * @param {number} value any
       * @returns {boolean} true or false.
       */
export const checkNumber = (value) => {
  if ((/^[\d]+$/.test(value))) {
    return true;
  }
};
  /**
     * This is a validation for user  data
     * @constant
     *
     * @param {String} message - any error message we provide
     *
     * @returns {Object}
     */
const errorMsg = [];
export const validationError = (req, message) => {
  errorMsg.push(message);
  req.error = 'redflag';
  return errorMsg;
};
export const getErrorMsg = (req, res) => {
  res.status(400).json({
    status: 400,
    error: errorMsg,
  });
  errorMsg.length = 0;
  req.error = null;
  return errorMsg;
};

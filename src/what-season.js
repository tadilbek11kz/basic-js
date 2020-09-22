const CustomError = require("../extensions/custom-error");

const isValid = (date) => {
  return (date instanceof Date && !isNaN(date) || (typeof date === "number" && !Number.isNaN(date)));
}

module.exports = function getSeason(date) {
  if (!isValid(date)) {
    return 'Unable to determine the time of year!';
  }
  let month = date.getMonth() + 1;
  if (3 <= month && month <= 5) {
    return 'spring';
  }

  if (6 <= month && month <= 8) {
    return 'summer';
  }

  if (9 <= month && month <= 11) {
    return 'fall';
  }

  return 'winter';
};

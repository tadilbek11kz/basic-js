const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || !parseInt(sampleActivity) || parseInt(sampleActivity) > 100 || parseInt(sampleActivity).toString() !== sampleActivity || parseInt(sampleActivity) < 0) {
    return false
  }
  return Math.ceil((MODERN_ACTIVITY / sampleActivity) / (1.22 * (10 ** -4)))
};

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (Array.isArray(element)) {
        return this.calculateDepth(arr.flat(), counter += 1);
      }

    }
    return counter
  }
};
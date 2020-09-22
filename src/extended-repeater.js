const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.repeatTimes === undefined ? options.repeatTimes = 1 : null;
  options.separator = options.separator || '+';
  options.addition = options.addition === undefined ? '' : String(options.addition);
  options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : null;
  options.additionSeparator = options.additionSeparator || '|';

  let result = [];
  let temp = [];

  for (let index = 0; index < options.additionRepeatTimes; index++) {
    temp.push(options.addition);
  }

  const extraPart = temp.join(options.additionSeparator);

  for (let index = 0; index < options.repeatTimes; index++) {
    result.push(str + extraPart);
  }

  return result.join(options.separator);
};

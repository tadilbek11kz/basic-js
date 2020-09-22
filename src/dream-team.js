const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let output = ""
  if (!Array.isArray(members)) {
    return false;
  };
  members.forEach(member => {
    if (typeof member === "string") {
      output += member.trim().length !== 0 ? member.trim()[0].toUpperCase() : "";
    };
  });
  return output.split("").sort().join("");
};

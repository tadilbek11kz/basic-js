const CustomError = require("../extensions/custom-error");

const chainMaker = {
  nodes: [],
  getLength() {
    return this.nodes.length;
  },
  addLink(value) {
    this.nodes.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number' && position > 0 && position <= this.nodes.length) {
      this.nodes.splice(position - 1, 1);
      return this;
    }
    this.nodes = []
    throw new Error("test")
  },
  reverseChain() {
    this.nodes.reverse();
    return this;
  },
  finishChain() {
    let output = this.nodes.join('~~');
    this.nodes = []
    return output;
  }
};

module.exports = chainMaker;

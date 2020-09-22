const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.reverse = boolean;
  }
  generate(str, key) {
    let newStr = ""
    for (let index = 0; index < str.length; index++) {
      const element = str[index];
      if (/[A-Z]/.test(element)) {
        newStr += element
      }
    }
    str = newStr

    let x = str.length;
    let index = 0
    while (true) {
      if (x === index) {
        index = 0
      }
      if (key.length >= str.length) {
        break
      }
      key += key[index]
      index++
    }
    return key
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("error")
    }

    str = str.toUpperCase();
    key = key.toUpperCase();
    key = this.generate(str, key)

    let output = [];
    let cnt = 0

    for (let index = 0; index < str.length; index++) {
      if (/^[A-Z]$/.test(str[index])) {
        let x = (str.charCodeAt(index) + key.charCodeAt(cnt)) % 26
        cnt++;
        x += "A".charCodeAt(0)
        output.push(x)
      } else {
        output.push(str.charCodeAt(index))
      }

    }

    if (!this.reverse) {
      return String.fromCharCode(...output.reverse());
    } else {
      return String.fromCharCode(...output);
    }

  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error("error")
    }

    str = str.toUpperCase();
    key = key.toUpperCase();
    key = this.generate(str, key)

    let output = [];
    let cnt = 0

    for (let index = 0; index < str.length; index++) {
      if (/^[A-Z]$/.test(str[index])) {
        let x = (str.charCodeAt(index) - key.charCodeAt(cnt) + 26) % 26
        cnt++
        x += "A".charCodeAt(0)
        output.push(x)
      } else {
        output.push(str.charCodeAt(index))
      }

    }

    if (!this.reverse) {
      return String.fromCharCode(...output.reverse());
    } else {
      return String.fromCharCode(...output);
    }
  }
}

module.exports = VigenereCipheringMachine;

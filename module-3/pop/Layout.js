"use strict";
const Element = require("./Element.js");

class Layout extends Element {
  constructor(name, url, locator) {
    super(name, locator);
    this.url = url;
  }

  setParent(parent) {
    throw new Error("Parent can't be set for layout!");
  }

  load() {
    return this.url;
  }
}

module.exports = Layout;

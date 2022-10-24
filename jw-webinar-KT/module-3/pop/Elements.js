"use strict";

const Element = require("./Element.js");
const ElementArrayFinder = require("../test/mock/ElementArrayFinder");

class Elements extends Element {
  constructor(name, locator) {
    super(name, locator);
    this.parent = null;
    this.children = null;
  }

  all() {
    return ElementArrayFinder.all(this.locator);
  }

  get(name) {
    return ElementArrayFinder.all(this.locator).get(name);
  }
}

module.exports = Elements;

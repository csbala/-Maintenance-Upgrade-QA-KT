const ElementFinder = require("../test/mock/ElementFinder");

class Element {
  constructor(name, locator) {
    this.locator = locator;
    this.name = name;
    this.parent = null;
    this.children = {};
  }

  setParent(parent) {
    this.parent = parent;
  }

  addChildren(child) {
    if (this.children.hasOwnProperty(child.name)) {
      throw new Error("Child with '" + child.name + "' name already exists!");
    } else {
      child.parent = this;
      this.children[child.name] = child;
    }
  }

  get(name) {
    let result = [];

    function getThat(where) {
      if (name === undefined) {
        result.push(new ElementFinder(where.locator));
      } else if (where.children !== null) {
        if (Object.keys(where.children).length) {
          if (where.children.hasOwnProperty(name)) {
            result.push(new ElementFinder(where.children[name].locator));
          } else {
            for (let key in where.children) {
              getThat(where.children[key]);
            }
          }
        }
      }
    }

    getThat(this);
    if (result.length === 0) {
      throw new Error(`No child with ${name} name exists!`);
    } else {
      return result[0];
    }
  }
}

module.exports = Element;

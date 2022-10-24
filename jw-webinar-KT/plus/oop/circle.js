/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function getArea return the area of the circle
 * @function getPerimeter return the perimeter of the circle
 */

module.exports = class Circle {
  constructor(radius) {
    if (typeof radius === "number" && radius >= 0) {
      this.r = radius;
    } else throw new Error("Invalid radius!");
  }
  getPerimeter() {
    return this.r * 2 * Math.PI;
  }
  getArea() {
    return this.r ** 2 * Math.PI;
  }
};

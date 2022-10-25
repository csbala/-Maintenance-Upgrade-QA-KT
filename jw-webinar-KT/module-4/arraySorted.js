/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 *
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 *
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
const lodash = require("lodash");
const arrayEqual = require("./arrayEqual");

module.exports = function arraySorted(items, ignore = "") {
  const cleaned = items
    .map((element) => element.toString().toLowerCase())
    .map((element) =>
      element
        .split("")
        .filter((char) => !(ignore + " '\"&\n\t\\\r\b\f\v\0").includes(char))
        .join("")
    );

  const sorted = cleaned.slice().sort();

  return lodash.isEqual(sorted, cleaned);
};

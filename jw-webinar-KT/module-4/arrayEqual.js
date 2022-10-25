/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 *
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 *
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

const lodash = require("lodash");

module.exports = function arrayEqual(first, second) {
  if (lodash.isEqual(first, second)) {
    return true;
  } else {
    if (first.length != second.length) {
      console.warn(
        "The two array are not the same length! array1.length: " +
          first.length +
          ", array2.length: " +
          second.length
      );
    }

    if (first != second) {
      console.warn(
        "\t\t The two array are not the same! array1: " +
          first +
          ", array2: " +
          second
      );
    }

    return false;
  }
};

/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */


module.exports = function arraySum(elements) {
  let sum = 0;

  function get(arr) {

    //gets the value in one layer of array
    sum += arr.reduce((acc, element) => {
      if (typeof element === "number") {
        return acc + element;
      } else {
        return acc;
      }
    }, 0);
   
    //iterate through nested array
    for (const elem of arr) {
      if (Array.isArray(elem)) {
        get(elem);
      }
    }
  }

  get(elements);
  return sum;
};

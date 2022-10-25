/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

module.exports = function romanToDec(roman) {
  let validRomans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let regexp = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  let result = 0;

  if (typeof roman != "string") {
    console.warn("Not a string");
    return false;
  }
  const fixesRoman = roman
    .split("")
    .map((char) => char.toUpperCase())
    .join("");

  if (!regexp.test(fixesRoman) || !fixesRoman) {
    console.warn("Not a valid roman number");
    return false;
  }
  
  for (const char of fixesRoman) {
    if (
      validRomans[fixesRoman[fixesRoman.indexOf(char) + 1]] > validRomans[char]
    ) {
      result -= validRomans[char];
    } else result += validRomans[char];
  }
  return result;
};

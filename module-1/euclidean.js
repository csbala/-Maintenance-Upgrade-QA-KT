/**
 * The function determines the greatest common divisor or
 * the given two numbers.
 *
 * @param {number} a (a > 0)
 * @param {number} b (b > 0)
 * @returns {number} GCD or 0 if any arguments are not proper
 */
function euclidean(a, b) {
    let gcd;

    if(a < 0 || b < 0){
        return 0;
    }

    while ( a != b ) {
        if ( a > b ) {
            a -= b;
        }else {
            b -= a;
        }
    }
    gcd = a 
    return gcd;
}
module.exports = euclidean;
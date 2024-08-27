/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let result = 0  // number of steps to reduce it to zero
    while (num) {
        if (num % 2 === 0) {
            // even
            num /= 2
        } else {
            // odd
            num -= 1
        }
        result += 1
    }

    return result
};
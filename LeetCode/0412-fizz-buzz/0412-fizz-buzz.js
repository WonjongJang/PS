const check = (i) => {
    if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz"
    } else if (i % 3 === 0) {
        return "Fizz"
    } else if (i % 5 === 0) {
        return "Buzz"
    } else {
        return String(i)
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = []
    for (let i = 1; i < n+1; i++) {
        result.push(check(i))
    }

    return result
};
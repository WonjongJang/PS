/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    result = 0
    for (n of nums) {
        if (String(n).length % 2 === 0) result += 1
    }
    
    return result
};
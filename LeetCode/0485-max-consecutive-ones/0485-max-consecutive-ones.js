/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i]) {
            nums[i] += nums[i-1]
        }
    }
    return Math.max(...nums)
};
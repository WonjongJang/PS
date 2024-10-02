/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0]
    
    const dp = Array.from({length: nums.length}).fill(0)
    
    dp[0] = nums[0]
    dp[1] = nums[1]
    for (let i = 2; i < nums.length; i++) {
        const temp = dp.slice(0, i-1)
        dp[i] = nums[i] + Math.max(...temp)
    }

    return Math.max(...dp)
};
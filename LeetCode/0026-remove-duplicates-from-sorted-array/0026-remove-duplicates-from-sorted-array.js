/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    let count = 0
    while (i < nums.length-1) {
        if (nums[i] !== '_' && nums[i] === nums[i+1]) {
            for (let j = i; j < nums.length-1; j++) {
                nums[j] = nums[j+1]
            }
            nums[nums.length-1] = '_'
            count++
        } else {
            i++
        }
    }
    
    return nums.length - count  // the number of unique elements of nums
};
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let countVal = 0    // equal to val
    let i = 0
    while (i < nums.length) {
        if (nums[i] === val) {
            for (let j = i; j < nums.length-1; j++) {
                nums[j] = nums[j+1]
            }
            nums[nums.length-1] = ''
            countVal++
        } else {
            i++
        }
    }
    
    return nums.length - countVal   // k
};
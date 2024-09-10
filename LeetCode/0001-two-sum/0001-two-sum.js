/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const numsMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		const key = target - nums[i];
		const value = numsMap.get(key);

		if (numsMap.has(key)) {
			return [value, i];
		}

		numsMap.set(nums[i], i);
	}
};

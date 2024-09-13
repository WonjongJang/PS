/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
	if (arr.length < 3) return false; // 조건 arr.length >= 3

	const maxValue = Math.max(...arr);
	const maxValueIndex = arr.indexOf(maxValue);
	if (maxValueIndex === 0 || maxValueIndex === arr.length - 1 ) return false;

	for (let i = 1; i < arr.length; i++) {
		if (i <= maxValueIndex) {
			if (arr[i - 1] >= arr[i]) return false;
		} else {
			if (arr[i - 1] <= arr[i]) return false;
		}
	}

	return true;
};

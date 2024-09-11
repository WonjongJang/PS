/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
    
	const result = [intervals[0]];
	for (let i = 1; i < intervals.length; i++) {
		if (result.at(-1)[1] >= intervals[i][0]) {
			const prev = result.pop();
			const temp = [...prev, ...intervals[i]];
			result.push([Math.min(...temp), Math.max(...temp)]);
		} else {
			result.push(intervals[i]);
		}
	}

	return result;
};

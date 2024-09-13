/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
	// 내림차순으로 큰 요소 부터 보게 되면 이후 요소의 2배가 있는지만 확인하면 됨
	// 음수인 경우에 대비해 절대값으로 변환
	const newArr = arr.map(v => Math.abs(v)).sort((a, b) => b - a);

	const hash = new Map();
	for (let i = 0; i < newArr.length; i++) {
		if (hash.has(newArr[i] * 2)) return true;
		hash.set(newArr[i], i);
	}

	return false;
};

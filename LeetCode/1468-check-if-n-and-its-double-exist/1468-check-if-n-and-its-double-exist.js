/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
	const hash = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (hash.has(arr[i])) return true;
		// hash에 현재 요소의 2배와 1/2배를 모두 저장 (1/2배는 짝수인 경우만)
		hash.set(arr[i] * 2, i);
		if (arr[i] % 2 === 0) hash.set(arr[i] / 2, i);
	}

	return false;
};

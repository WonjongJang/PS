/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let plus = 1; // 각 자릿수에 더할게 있는지 확인하는 변수
	for (let i = digits.length - 1; i >= 0; i--) {
		const temp = digits[i] + plus;
		if (temp === 10) {
			// 자릿수가 1 증가했을 때 10이 되는 경우
			digits[i] = 0; // 현재 자릿수를 0으로 초기화
			// 앞의 자릿수를 1 증가해야하기 때문에 plus는 1로 유지
		} else {
			// 자릿수가 1 증가했을 때 10 보다 작은 경우
			digits[i] = temp;
			plus = 0; // 다른 자릿수에 영향을 주지 않기 때문에 plus를 0으로 초기화
			break; //  탈출
		}
	}
	// 모든 자릿수를 순회한 후에도 plus가 남아있는 경우
	if (plus) digits.unshift(1); // 앞의 자릿수가 하나 늘어남

	return digits;
};

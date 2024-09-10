/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	// 문자열 a와 b의 합을 number 타입의 요소를 가진 배열로 변경
	// 큰 정수인 경우 표기법이 달라지므로 BigInt 사용
	const total = String(BigInt(a) + BigInt(b))
		.split('')
		.map(v => Number(v));

	let flag = 0;
	for (let i = total.length - 1; i >= 0; i--) {
		if (flag) total[i]++;

		if (total[i] === 2 || total[i] === 3) {
			flag = 1;
			total[i] %= 2;
		} else {
			flag = 0;
		}
	}
	if (flag) total.unshift(flag);

	return total.join('');
};

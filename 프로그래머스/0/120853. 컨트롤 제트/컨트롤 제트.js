1;
function solution(s) {
	let result = 0;
	let pre = ''; // 바로 전에 더했던 숫자

	for (x of s.split(' ')) {
		if (x === 'Z') {
			// Z가 나오면
			result -= Number(pre);
		} else {
			result += Number(x);
		}
		pre = x;
	}
	return result;
}

function solution(n) {
	let result = 1; // 피자 판수
	while (true) {
		if ((6 * result) % n === 0) break;
		result++;
	}

	return result;
}
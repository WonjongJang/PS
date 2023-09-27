function solution(n) {
	const number3x = Array.from({ length: n + 1 }).fill(0); // 3x 마을에서 쓰는 숫자

	let temp = 1;
	for (let i = 1; i < n + 1; i++) {
		while (temp % 3 === 0 || String(temp).includes('3')) {
			// 3의 배수 또는 숫자 3이 들어갔다면
			temp++;
		}
		number3x[i] = temp++;
	}

	return number3x[n];
}
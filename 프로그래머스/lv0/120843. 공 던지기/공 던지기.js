function solution(numbers, k) {
	const numbersLength = numbers.length;

	let cnt = 1; // 몇 번째
	let i = 0;
	while (true) {
		if (cnt === k) return numbers[i]; // k 번째

		i = (i + 2) % numbersLength; // 오른쪽으로 한 명 건너뛰기 위해 +2, 동그랗게 서서 하기 때문에 %로 배열 순회
		cnt++;
	}
}
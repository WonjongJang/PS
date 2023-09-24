function solution(numbers) {
	numbers.sort((a, b) => a - b); // 오름차순 정렬

	return Math.max(numbers[0] * numbers[1], numbers.at(-2) * numbers.at(-1));
}
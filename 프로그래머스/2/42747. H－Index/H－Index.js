function solution(citations) {
	citations.sort((a, b) => b - a);

	let maxValue = 0; // H-Index 중 최대값
	// H-Index: a번 이상 인용된 논문이 b편 이상일 때 a 와 b 중 작은 값
	for (let i = 0; i < citations.length; i++) {
		maxValue = Math.max(maxValue, Math.min(i + 1, citations[i]));
	}

	return maxValue;
}

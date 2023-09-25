function solution(balls, share) {
	const factorial = n => {
		return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
	};

	return Math.round(factorial(balls) / (factorial(share) * factorial(balls - share)));
}
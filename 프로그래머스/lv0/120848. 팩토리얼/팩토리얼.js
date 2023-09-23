function solution(n) {
	let temp = 1;
	let i = 1;
	while (true) {
		if (temp > n) return i-1;
		i++;
		temp *= i;
	}
}
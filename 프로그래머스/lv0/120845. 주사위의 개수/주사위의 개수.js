function solution(box, n) {
	let result = 1;

	box.forEach(v => {
		result *= parseInt(v / n);
	});

	return result;
}
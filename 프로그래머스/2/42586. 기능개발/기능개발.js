function solution(progresses, speeds) {
	// 작업이 끝나기까지 남은 일수
	const days = progresses.map((progress, index) => {
		return Math.ceil((100 - progresses[index]) / speeds[index]);
	});

	const result = [0];
	let maxDay = days[0];
	for (let i = 0, j = 0; i < days.length; i++) {
		if (maxDay >= days[i]) {
			result[j] += 1;
		} else {
			maxDay = days[i];
			result[++j] = 1;
		}
	}

	return result;
}
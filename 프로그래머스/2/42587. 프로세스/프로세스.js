function solution(priorities, location) {
	const newPriorities = priorities.map((priority, index) => {
		return [priority, index];
	});

	const run = []; // 실행한 프로세스
	while (newPriorities.length) {
		const temp = newPriorities.shift(); // 프로세스 하나를 꺼냄

		if (temp[0] < Math.max(...newPriorities.map(v => v[0]))) {
			// 우선순위가 더 높은 프로세스가 있다면
			// 다시 큐에 넣음
			newPriorities.push(temp);
		} else {
			// 우선순위가 더 높은 프로세스가 없다면
			// 방금 꺼낸 프로세스를 실행
			run.push(temp);
		}
	}

	for (let i = 0; i < run.length; i++) {
		if (run[i][1] === location) {
			return i + 1;
		}
	}
}

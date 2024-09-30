function solution(friends, gifts) {
	const length = friends.length;
	const hash = new Map();
	friends.forEach((friend, index) => {
		hash.set(friend, index);
	});

	const 주고받은선물 = Array.from({ length: length }, () => Array(length).fill(0));
	const 선물지수 = Array.from({ length: length }).fill(0);
	const 다음달선물 = Array.from({ length: length }).fill(0);

	for (const gift of gifts) {
		const temp = gift.split(' ');
		const from = hash.get(temp[0]); // 준 사람
		const to = hash.get(temp[1]); // 받은 사람

		주고받은선물[from][to] += 1;
		선물지수[from] += 1;
		선물지수[to] -= 1;
	}

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if (주고받은선물[i][j] > 주고받은선물[j][i]) 다음달선물[i] += 1;
			if (주고받은선물[i][j] === 주고받은선물[j][i] && 선물지수[i] > 선물지수[j]) 다음달선물[i] += 1;
		}
	}

	return Math.max(...다음달선물);
}

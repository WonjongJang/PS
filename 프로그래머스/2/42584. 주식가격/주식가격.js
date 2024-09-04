function solution(prices) {
	const result = [];
	for (let i = 0; i < prices.length; i++) {
		let time = 0;
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[i] <= prices[j]) {
				time++;
			} else {
				time++;
				break;
			}
		}
		result.push(time);
	}

	return result;
}

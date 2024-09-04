function solution(s) {
	const parentheses = s.split(''); // string to array

	const stack = [];
	for (p of parentheses) {
		if (p === ')') {
			if (stack.at(-1) === '(') {
				stack.pop();
			} else {
				return false;
			}
		} else {
			stack.push(p);
		}
	}

	if (stack.length) return false;

	return true;
}

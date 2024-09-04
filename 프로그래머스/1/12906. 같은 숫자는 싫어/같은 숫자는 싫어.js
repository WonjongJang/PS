function solution(arr) {
	const answer = [];
	for (let i = 0; i < arr.length; i++) {
		if (answer.at(-1) !== arr[i]) {
			answer.push(arr[i]);
		}
	}

	return answer;

	//     for (a of arr) {
	//         if (answer.at(-1) !== a) {
	//             answer.push(a)
	//         }
	//     }

	// 	return answer;
}

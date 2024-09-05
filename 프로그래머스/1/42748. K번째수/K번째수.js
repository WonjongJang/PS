function solution(array, commands) {
	const result = [];
	for (const command of commands) {
		const newArray = array.slice(command[0] - 1, command[1]); // 배열 자르기
		newArray.sort((a, b) => a - b); // 배열 정렬
		result.push(newArray[command[2] - 1]);
	}

	return result;
}

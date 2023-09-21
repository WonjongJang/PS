function solution(my_string) {
	return my_string
		.split('')
		.filter(v => !isNaN(v)) // 숫자
		.map(v => Number(v)) // string -> number
		.sort((a, b) => a - b); // 오름차순 정렬
}
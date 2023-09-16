function solution(array) {
	const hash = {};
	array.forEach(e => (hash[e] ? (hash[e] += 1) : (hash[e] = 1)));

	const sortedHash = Object.entries(hash).sort((a, b) => b[1] - a[1]); // 정렬

	const mode = sortedHash[0]; // 최빈값
	const modeCount = sortedHash.filter(v => v[1] === mode[1]).length; // 최빈값 개수 (여러 개)

	return modeCount > 1 ? -1 : Number(mode[0]);
}
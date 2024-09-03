function solution(genres, plays) {
	const result = [];
	const music = new Map();

	for (let i = 0; i < genres.length; i++) {
		const temp = music.get(genres[i]);
		if (temp) {
			music.set(genres[i], { list: [...temp.list, [plays[i], i]], sum: temp.sum + plays[i] });
		} else {
			music.set(genres[i], { list: [[plays[i], i]], sum: plays[i] });
		}
	}
	const musicList = [...music]; // map to array
	musicList.sort((a, b) => b[1].sum - a[1].sum);

	for (m of musicList) {
		const t = m[1].list
			.sort((a, b) => b[0] - a[0])
			.slice(0, 2)
			.map(v => v[1]);
		result.push(...t);
	}

	return result;
}
function solution(maps) {
	const n = maps.length; // 행
	const m = maps[0].length; // 열

	// 방향벡터
	const dx = [1, 0, -1, 0];
	const dy = [0, 1, 0, -1];

	const que = [[0, 0, 1]];
	maps[0][0] = 0;
	while (que.length) {
		const [x, y, cnt] = que.shift();

		if (x === n - 1 && y === m - 1) {
			return cnt;
		}

		for (let d = 0; d < 4; d++) {
			const nx = x + dx[d];
			const ny = y + dy[d];
			if (0 <= nx && nx < n && 0 <= ny && ny < m && maps[nx][ny] === 1) {
				que.push([nx, ny, cnt + 1]);
				maps[nx][ny] = 0;
			}
		}
	}

	return -1;
}
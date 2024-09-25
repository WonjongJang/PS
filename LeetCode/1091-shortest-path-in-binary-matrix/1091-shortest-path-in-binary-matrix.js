/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	const n = grid.length; // n x n 행렬
	if (grid[0][0] || grid[n - 1][n - 1]) return -1; // 출발점 또는 도착점이 1인 경우

	const visited = Array.from({ length: n }, () => Array(n).fill(0)); // 방문 기록 및 카운트

	// 방향벡터 (대각선 이동 포함)
	const dx = [1, 0, -1, 0, 1, 1, -1, -1];
	const dy = [0, -1, 0, 1, 1, -1, 1, -1];

	const que = [[0, 0]];
	visited[0][0] = 1;
	while (que.length) {
		const [x, y] = que.shift();

		// 도착점인 경우 반환
		if (x === n - 1 && y === n - 1) {
			return visited[x][y];
		}

		for (let d = 0; d < 8; d++) {
			const nx = x + dx[d];
			const ny = y + dy[d];

			// 도착점인 경우 반환하는 것을 여기에 넣을 경우 1 x 1 행렬인 테스트 케이스에 걸림

			if (0 <= nx && nx < n && 0 <= ny && ny < n && grid[nx][ny] === 0 && visited[nx][ny] === 0) {
				que.push([nx, ny, visited[x][y] + 1]);
				visited[nx][ny] = visited[x][y] + 1;
			}
		}
	}

	return -1; // 도착점에 도착하지 못한 경우
};

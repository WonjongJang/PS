/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const m = matrix.length;
	const n = matrix[0].length;
	// 방향벡터 (우하좌상 순서로 하면 요구한 나선 형태로 갈 수 있음)
	const dx = [0, 1, 0, -1];
	const dy = [1, 0, -1, 0];

	const visited = Array.from({ length: m }, () => Array(n).fill(0)); // 방문 기록
	const result = []; // 요소를 나선형 순서로 담을 공간

	// 방향벡터로 방향 순서를 정해 놓고
	// 해당 방향으로 갈 수 있다면 방향을 바꾸지 않고 계속 갈 수 있도록 재귀로 구현
	const recur = (x, y, d, cnt) => {
		if (cnt === m * n) return;

		const nx = x + dx[d];
		const ny = y + dy[d];
		if (0 <= nx && nx < m && 0 <= ny && ny < n && visited[nx][ny] === 0) {
			visited[nx][ny] = 1;
			result.push(matrix[nx][ny]);
			recur(nx, ny, d, cnt + 1);
		} else {
			// 해당 방향으로 갈 수 없는 경우 방향을 변경  (나머지를 활용해 방향이 순환되도록 설정)
			recur(x, y, (d + 1) % 4, cnt);
		}
	};

	visited[0][0] = 1;
	result.push(matrix[0][0]);
	recur(0, 0, 0, 1);

	return result;
};

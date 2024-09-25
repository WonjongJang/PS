/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length
    if (grid[0][0] || grid[n-1][n-1]) return -1

    const visited = Array.from({ length: n }, () => Array(n).fill(0));
    
    const dx = [1, 0, -1, 0, 1, 1, -1, -1]
    const dy = [0, -1, 0, 1, 1, -1, 1, -1]

    const que = [[0, 0, 1]]
    visited[0][0] = 1
    while (que.length) {
        const [x, y, cnt] = que.shift()
        
        for (let d = 0; d < 8; d++) {
            const nx = x + dx[d]
            const ny = y + dy[d]

            if (0 <= nx && nx < n && 0 <= ny && ny < n && grid[nx][ny] === 0 && visited[nx][ny] === 0) {
                que.push([nx, ny, cnt+1])
                visited[nx][ny] = cnt+1
            }
        }
    }

    console.log(visited)
    return visited[n-1][n-1] ? visited[n-1][n-1] : -1
};
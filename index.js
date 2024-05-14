function findCircleNum(M) {
  if (!M || M.length === 0) return 0;
  const visited = new Array(M.length).fill(false);
  let count = 0;
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      dfs(M, i, visited);
      count++;
    }
  }
  return count;
}
function dfs(M, i, visited) {
  visited[i] = true;
  for (let j = 0; j < M.length; j++) {
    if (M[i][j] === 1 && !visited[j]) {
      dfs(M, j, visited);
    }
  }
}

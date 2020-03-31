// 递归
// 时间: O(2^(m+n))
// 空间(栈深度): O(m+n)

// 动态规划
// 时间: O(mn)
// 空间: O(mn)
var minPathSum = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(m).fill(new Array(n))
  for (let i = m - 1; i >= 0; i--) {
      for (let j = n -1; j >= 0; j--) {
          const cur = grid[i][j]
          if (i === m - 1 && j === n - 1) {
              dp[i][j] = cur
          } else if (i === m - 1) {
              dp[i][j] = cur + dp[i][j + 1]
          } else if (j === n - 1) {
              dp[i][j] = cur + dp[i + 1][j]
          } else {
              dp[i][j] = cur + Math.min(dp[i][j + 1], dp[i + 1][j])
          }
      }
  }
  return dp[0][0]
};

// 动态规划（优化）
// 时间: O(mn)
// 空间: O(m+n)
var minPathSum = function(grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(n)
  for (let i = m - 1; i >= 0; i--) {
      for (let j = n -1; j >= 0; j--) {
          const cur = grid[i][j]
          if (i === m - 1 && j === n - 1) {
              dp[j] = cur
          } else if (i === m - 1) {
              dp[j] = cur + dp[j + 1]
          } else if (j === n - 1) {
              dp[j] = cur + dp[j]
          } else {
              dp[j] = cur + Math.min(dp[j + 1], dp[j])
          }
      }
  }
  return dp[0]
};
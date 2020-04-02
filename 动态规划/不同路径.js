// 动态规划公式: dp(i,j) = dp(i-1,j) + dp(i,j-1)
// dp(i,j)表示到(i,j)位置的路径数 

// 时间和空间都为：O(mn)
var uniquePaths = function(m, n) {
  const dp = new Array(m).fill(new Array(n))
  for (let i = 0; i < m; i++) dp[i][0] = 1
  for (let j = 0; j < n; j++) dp[0][j] = 1
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m - 1][n - 1]
};

// 空间 O(n)
var uniquePaths = function(m, n) {
  const dp = new Array(n)
  dp.fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        dp[j] = dp[j-1] + dp[j]
    }
  }
  return dp[n-1]
};
var isSubsequence = function (s, t) {
  if (!s && !t) return true
  let i = 0
  let j = 0
  const sLes = s.length
  const tLes = t.length
  while (i < sLes && j < tLes) {
      if (s[i] === t[j]) {
          i++
          j++
      } else {
          j++
      }
  }
  if (i < sLes) {
      return false
  } else {
      return true
  }
};

// 后续优化：
// 如果有大量输入的 S，称作S1, S2, ... , Sk 其中
// k >= 10亿，你需要依次检查它们是否为 T 的子序列。

// 建立一个n * 26 大小的矩阵，表示每个位置上26个字
// 符下一次出现的位置，算法实现为贪心算法
var isSubsequence = function (s, t) {
  t = ` ${t}`
  const sLes = s.length
  const tLes = t.length
  const dp = new Array(tLes).fill(new Array(26))
  
  for (let i = 0; i < 26; i++) {
    const curLetter = (i + 10).toString(36)
    let nextPos = -1
    for (let j = tLes - 1; j >= 0; j--) {
      // 寻找下一个位置, 要从后往前
      dp[j][i] = nextPos
      if (t[i] === curLetter) {
        nextPos = i
      }
    }
  }

  let index = 0
  for (let k = 0; k < sLes; k++) {
    const nu = s[k].charCodeAt(0)
    index = dp[index][nu]
    if (index === -1) {
      return false
    }
  }
  return true
};
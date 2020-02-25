// 双指针法
// 官方题解: 以首末两点为起点，较短的那一根向内侧移动，直到两指针相遇。
const maxArea = height => {
  let i = 0
  let j = height.length - 1
  let res = 0
  let temp = 0
  while (i < j) {
    if (height[i] < height[j]) {
      temp = height[i] * (j - i)
      i++
    } else { 
      temp = height[j] * (j - i)
      j--
    }
    if (temp > res) {
      res = temp
    }
  }

  return res
}

// 双指针法的正确性证明
// 假设此时最左边红柱[0]比最右边[n-1]低
// 此时最左面的红柱向右移动一步，这代表什么？
// 代表以height[0]为端点，除了height[n-1](也就是最后一个点)以外的点都不会再被遍历到，为什么可以这样呢?
// 因为height[0] < height[n-1]，所以以height[0]为端点，其他任意一点为另一个端点，所构成图形的面积，
// 都小于height[0]*(n-1)height[0]∗(n−1)。
// 由于我们已经找到了以height[0]为端点的图形的最大值，所以可以删除该点，继续看剩下的点。这样又回到了最初的起点，
// 所以，双指针的遍历方法，相当于找的是以每个点为端点的图形的最大面积，那么就一定包含了整个问题的最大面积

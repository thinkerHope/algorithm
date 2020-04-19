// 双指针法
// 官方题解: 以首末两点为起点，较短的那一根向内侧移动，直到两指针相遇。
var maxArea = function(height) {
  let _max = 0
  let p = 0
  let q = height.length - 1
  while (p !== q) {
      _max = Math.max(_max, Math.min(height[p], height[q]) * (q - p))
      if (height[p] < height[q]) {
          p++
      } else {
          q--
      }
  }
  return _max
};

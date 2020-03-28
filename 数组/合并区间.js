/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const les = intervals.length
  if (les <= 1) {
      return intervals
  }
  // 先对start进行排序
  intervals.sort((a, b) => a[0] - b[0])
  let i = 0
  let j = 1
  let top = 1
  for (; j < les; j++) {
      if (intervals[i][1] >= intervals[j][0]) {
          if (intervals[i][1] < intervals[j][1]) {
              intervals[i][1] = intervals[j][1]
          }
      } else {
          intervals[top++] = intervals[j]
          // bug修复
          i++
      }
  }
  return intervals.slice(0, top)
};
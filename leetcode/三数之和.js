// 原理
// 先将数组进行排序
// 从左侧开始，选定一个值为 定值 ，右侧进行求解，获取与其相加为 00 的两个值
// 类似于快排，定义首和尾
// 首尾与 定值 相加
  // 等于 00，记录这三个值
  // 小于 00，首部右移
  // 大于 00，尾部左移
// 定值右移，重复该步骤

const threeSum = function(nums) {
  const res = []
  nums.sort((a, b) => a - b)
  const index = nums.findIndex(i => i >= 0)
  const len = nums.length
  if (nums[0] <= 0 && nums[len - 1] >= 0) {
      for (let i = 0; i < index + 1;) {
          let start = i + 1
          let end = len - 1 
          while (start < end) {
              const sum = nums[i] + nums[start] + nums[end]
              if (sum === 0) {
                  res.push([nums[i], nums[start], nums[end]])
              }
              if (sum <= 0) {
                  while (nums[start] === nums[++start]) {}
              } else {
                  while (nums[end] === nums[--end]) {}
              }
          }
          while (nums[i] === nums[++i]) {}
      }
  }

  return res
}
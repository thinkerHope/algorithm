// 元素顺序可变
var removeElement = function(nums, val) {
  if (nums === null || nums.length === 0) return 0

  let i = 0
  let n = nums.length

  while (i < n) {
      if (nums[i] === val) {
          nums[i] = nums[n - 1]
          n--
      } else {
          i++
      }
  }

  return n
};
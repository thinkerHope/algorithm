// 二分法, 复杂度olog(n)
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let middle
  while (left <= right) {
      middle = (left + right) >>> 1
      if (nums[middle] === target) {
          return middle
      } else if (nums[middle] < target) {
          left = middle + 1
      } else {
          right = middle - 1
      }
  }
  return left
};
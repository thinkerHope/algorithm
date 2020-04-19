// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
// 不使用额外空间且时间复杂度为O(n)的情况下完成
// 利用数组索引和数值的关系
var findDisappearedNumbers = function(nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
      if (nums[Math.abs(nums[i]) - 1] > 0) {
          nums[Math.abs(nums[i]) - 1] *= -1
      }
  }
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          result.push(i + 1)
      }
  }

  return result
};
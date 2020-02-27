// 双指针
var removeDuplicates = function(nums) {
  let p = 0
  let q = 1
  
  while (q < nums.length) {
      if (nums[p] !== nums[q]) {
          // 优化: 考虑[0, 1, 2, 3, 4, 5]
          if (q - p > 1) {
              nums[p + 1] = nums[q]
          }
          p++
      }
      q++
  } 

  return p + 1
};
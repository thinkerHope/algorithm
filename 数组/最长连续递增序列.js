var findLengthOfLCIS = function(nums) {
  const les = nums.length
  if (les === 0) return 0 
  let max = 1
  let count = 1
  for (let i = 1; i < les; i++) {
      if (nums[i] > nums[i - 1]) {
          count++
      } else {
          count = 1
      }
      if (count > max) {
          max = count
      }
  }
  return max
};
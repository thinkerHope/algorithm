var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)

  let i = 0
  const len = nums.length
  let diff = nums[0] + nums[1] + nums[2] -target

  while (i < len - 2) {
      let start = i + 1
      let end = len - 1
      while (start < end) {

          const sum = nums[i] + nums[start] + nums[end] 
          if (sum === target) return sum
          if (sum < target) {
              while (nums[start] === nums[++start]) {}
          }
          if (sum > target) {
              continuing = false
              while (nums[end] === nums[--end]) {}
          }
          diff = Math.abs(sum - target) < Math.abs(diff) ? sum - target : diff
      }
      while (nums[i] === nums[++i]) {}
  }

  return target + diff
};
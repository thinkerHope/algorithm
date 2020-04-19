var canJump = function(nums) {
  let les = nums.length
  nums[les -1] = true
  for (let i = les - 2; i >= 0; i--) {
      let cur = nums[i]
      if (cur === 0) {
          nums[i] = false
          continue
      }
      nums[i] = false
      for (let j = 1; j <= cur; j++) {
          if (i + j < les) {
              if (nums[i + j] === true) {
                  nums[i] = true
                  continue
              }
          }
      }
  }
  return nums[0]
};

// 优化

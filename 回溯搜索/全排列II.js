// 全排序有重复数组
// 回溯 + 剪枝
var permuteUnique = function(nums) {
  const result = []
  const track = []
  nums.sort((a, b) => a > b)
  const used = new Array(nums.length).fill(false)
  backTrack(nums, track)

  function backTrack(nums, track) {
      if (track.length === nums.length) {
          const _track = [...track]
          result.push(_track)
          return
      }

      for (let i = 0; i < nums.length; i++) {
          const num = nums[i]
          // 在一定会重复的地方剪枝
          if (used[i]) {
              continue
          }
          // 剪枝完全
          if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
              continue
          }

          track.push(num)
          used[i] = true
          backTrack(nums, track)
          // 撤销部分和选择是对称的
          used[i] = false
          track.pop()
      }
  }

  return result
};
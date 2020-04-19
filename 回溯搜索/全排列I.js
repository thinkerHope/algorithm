// 全排序无重复数组
// 回溯搜索
var permute = function(nums) {
  const result = []
  const track = []
  backTrack(nums, track)

  function backTrack(nums, track) {
      if (track.length >= nums.length) {
          const _track = [...track]
          result.push(_track)
          return
      }
      for (let i = 0; i < nums.length; i++) {
          if (track.indexOf(nums[i]) !== -1) continue

          track.push(nums[i])
          backTrack(nums, track)
          track.pop()
      }
  }

  return result
};
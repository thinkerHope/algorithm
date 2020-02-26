// 暴力 o(nlogn)
var twoSum = function(nums, target) {

  var result = [];
  var len = nums.length;
  for(var i=0;i<len;i++){
      // j从 i+1 开始 确保不重复利用同一个元素
      for(var j =i+1;j<len;j++){
          if(nums[i] + nums[j] == target){
              result.push(i);
              result.push(j);
              return result;
          }
      }
  }
};

// 避免暴力破解的重复比较 - 68ms o(n)
var twoSum = function(nums, target) {
  
  const tmp = {};
  const les = nums.length;
  for (let i = 0; i < les; i++) {
    if (tmp[target - nums[i]] !== undefined) {
      return [tmp[target - nums[i]], i];
    } else {
      tmp[nums[i]] = i;
    }
  } 
}

// es6的Map数据结构 - 68ms （优化{}）
var twoSum = function(nums, target) {
    
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let otherIndex = map.get(target - nums[i]);
      if (otherIndex !== undefined) {
          return [otherIndex, i];
      } else {
          map.set(nums[i], i);
      }
  }
}

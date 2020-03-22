// 示例 1：
// 输入：
// ["a","a","b","b","c","c","c"]
// 输出：
// 返回6，输入数组的前6个字符应该是：["a","2","b","2","c","3"]

// 示例 2：
// 输入：
// ["a"]
// 输出：
// 返回1，输入数组的前1个字符应该是：["a"]，注意1个字符不需要counter

// 示例 3：
// 输入：
// ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// 输出：
// 返回4，输入数组的前4个字符应该是：["a","b","1","2"]。

// 栈
var compress = function(chars) {
  let top = 0
  let counter = 1
  const les = chars.length
  for (let i = 0; i < les - 1; i++) {
      if (chars[i] === chars[i + 1]) {
          counter++ 
      } else {
          chars[top++] = chars[i] 
          if (counter > 1) {
              const counterLes = counter.toString().length
              for (let j = 0; j < counterLes; j++) {
                  chars[top++] = (counter.toString())[j]
              }
              counter = 1
          }
      }
  }
  // 处理最后一类字符
  chars[top++] = chars[les - 1]
  if (counter > 1) {
      const counterLes = counter.toString().length
      for (let j = 0; j < counterLes; j++) {
          chars[top++] = (counter.toString())[j]
      } 
  }
  return top
}
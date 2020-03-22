var isValid = function(s) {
  let top = -1
  const map = {
      "{": "}",
      "[": "]",
      "(": ")",
  }
  const stack = []
  const first = s[0]
  const openKeys = "{[("
  if (s === '') return true
  if (openKeys.indexOf(first) === -1) {
      return false
  } else {
    stack[++top] = first
  }
  for (let i = 1; i < s.length; i++) {
      if (openKeys.indexOf(s[i]) !== -1) {
          // 遇到开括号
          stack[++top] = s[i]
      } else {
          // 遇到闭括号
          if (stack[top] && map[stack[top]] === s[i]) {
              top--
          } else {
              return false
          }
      }
  }
  if (top === -1) {
    return true
  } else {
      return false
  }
};
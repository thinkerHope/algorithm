// hashTable
function solution(str) {
  const obj = Object.create(null)
  let max = -1
  let letter = ''
  for (let i = 0; i < str.length; i++) {
    if(obj[str[i]]) {
      obj[str[i]]++
      if (obj[str[i]] > max) {
        max = obj[str[i]]
        letter = str[i]
      }
    } else {
        obj[str[i]] = 1
        letter = str[i]
    }
  }
  
  return letter
}

// 正则
function solution(str) {
  if (str.length) {
    const pattern = /(\w)\1*/g
    const sortedStr = str.split('').sort().join('')
    const arr = sortedStr.match(pattern)
    arr.sort((a, b) => a.length > b.length)
    return arr[0][0]
  }
  return ''
}

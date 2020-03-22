var isPalindrome = function(s) {
  if (s === '') return true
  const re = /[^a-zA-Z\d]/g
  s = s.replace(re, '').toLowerCase()
  let a = 0
  let b = s.length - 1
  while (a < b) {
      if (s[a++] !== s[b--]) {
          return false
      } 
  }
  return true
}
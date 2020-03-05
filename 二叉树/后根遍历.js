const postorderTraversal = root => {
  const result = []
  const stack = []
  let T = root
  let flag
  let p = null

  if (T) {
    stack.push(T)
    while (stack.length) {
      while (stack[stack.length - 1]) {
        stack.push(T.lchild)
      }
      stack.pop()
      while (stack.length) {
        T = stack[stack.length - 1]
        if (T.rchild === null || T.rchild === p) {
          stack.pop()
          result.push(T.val)
          p = T
          flag = false
        } else {
          stack.push(T.rchild)
          flag = true
        }
        if (falg) {
          break
        }
      }
    }
  }
}
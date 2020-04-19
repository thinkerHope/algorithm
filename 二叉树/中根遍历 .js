// 每个结点都会被访问一次
const inorderTraversal = root => {
  const result = []
  const stack = []
  if (root) {
    let T = root
    while (stack.length) {
      while (stack[stack.length - 1]) {
        stack.push(stack[stack.length - 1].lchild)
      }
      stack.pop()
      if (stack.length) {
        T = stack.pop()
        result.push(T.val)
        stack.push(T.rchild)
      }
    }
  }

  return result
}


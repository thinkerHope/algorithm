// 每个结点都会被访问一次
const inorderTraversal = root => {
  const result = []
  const stack = []
  let current = root
  stack.push(current)

  while (stack.length) {
    while (current.lchild) {
      stack.push(current.lchild)
      current = current.lchild
    }
    current = stack.pop()
    result.push(current.val)
    if (current.rchild) stack.push(current.rchild)
  }
  
  return result
}
const preorderTraversal = root => {
  const result = []
  const stack = []
  let T = root
  T && stack.push(T)
  while (stack.length) {
    T = stack.pop()
    result.push(T.val)
    while (T) {
      if (T.lchild) {
        result.push(T,lchild.val)
      }
      if (T.rchild) {
        stack.push(T.rchild)
      }
      T = T.lchild
    }
  }

  return result 
}
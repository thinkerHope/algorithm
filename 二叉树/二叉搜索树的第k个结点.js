// 给定一棵二叉搜索树(BST), 请找出其中的第k小的结点
// 二叉搜索树性质: 
// 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值 
// 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值
// 即中序遍历的第k个结点
// 非递归实现
function KthNode(root, k) {
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

  return result[k - 1]
}

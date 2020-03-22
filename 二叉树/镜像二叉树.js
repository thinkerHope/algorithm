function Mirror(root) {
  if (root) {
    [root.lchild.val, root.rchild.val] = [root.rchild.val, root.lchild.val]
  }
  Mirror(root.lchild)
  Mirror(root.rchild)
}
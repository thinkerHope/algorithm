public int[] preorderTraversal(root) {
  BiTreeNode T = root;
  int[] result = new int[];
  if (T != null) {
    LinkStack S = new LinkStack();
    S.push(T);
    while (!S.isEmpty()) {
      T = (BiTreeNode)S.pop();
      result.push(T.val);
      while (T != null) {
        if (T.lchild != null) {
          result.push(T.lchild.val);
        }
        if (T.rchild != null) {
          S.push(T.rchild);
        }
        T = T.lchild;
      }
    }
  }
}

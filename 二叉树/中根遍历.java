public int[] inorderTraversal(root) {
  BiTreeNode T = root;
  int[] result = new int[];
  if (T != null) {
    LinkStack S = new LinkStack();
    S.push(T);
    while (!S.isEmpty()) {
      while (S.peek() != null) {
        S.push(((BiTreeNode)S.peek()).lchild);
      };
      S.pop();
      if (!S.isEmpty()) {
        T = (BiTreeNode)S.pop();
        result.push(T.val);
        S.push(T.rchild);
      }
    }
  }

  return result;
}
// 每个结点访问两次
public int[] postorderTraversal(root) {
  BiTreeNode T = root;
  const result = [];
  if (T != null) {
    LinkStack S = new LinkStack();
    S.push(T);
    // 可能是一棵左子树遍历完, 也有可能是右子树
    Boolean flag;
    // 指向刚刚访问过的结点
    BiTreeNode p = null;
    while (!S.isEmpty()) {
      while (S.peek() != null) {
        S.push(S.peek().lchild);
      }
      S.pop();
      while (!S.isEmpty()) {
        T = S.peek();
        if (T.rchild == null || T.rchild == p) {
          S.pop();
          result.push(T.val);
          p = T;
          flag = false;
        } else {
          S.push(T.rchild);
          flag = true;
        }
        if (flag) {
          break;
        }
      }
    }
  }
  
  return result;
}
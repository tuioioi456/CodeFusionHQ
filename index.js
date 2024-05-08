function buildTree(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);
  const mid = inorder.indexOf(rootVal);
  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(
    inorder.slice(mid + 1),
    postorder.slice(mid, postorder.length - 1),
  );
  return root;
}

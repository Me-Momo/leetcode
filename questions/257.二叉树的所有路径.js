/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  // 深度遍历
  if (!root) return [];
  if (root.left === null && root.right === null) return [`${root.val}`];
  const left = binaryTreePaths(root.left);
  const right = binaryTreePaths(root.right);
  return left.concat(right).map(d => `${root.val}->${d}`);
};
// @lc code=end


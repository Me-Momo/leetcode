/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  if (ax1 > bx1) {
    // 使 rect2 一直是右边的 矩形
    return computeArea(bx1, by1, bx2, by2, ax1, ay1, ax2, ay2);
  }

  const total =
    Math.abs(ax2 - ax1) * Math.abs(ay2 - ay1) +
    Math.abs(bx2 - bx1) * Math.abs(by2 - by1);
  // 没有相交的情况
  if (ay1 >= by2 || ax2 <= bx1 || ay2 <= by1) {
    return total;
  }

  // 计算相交
  const p0x = Math.max(ax1, bx1);
  const p1x = Math.min(ax2, bx2);

  const p1y = Math.max(ay1, by1);
  const p0y = Math.min(ay2, by2);
  return total - Math.abs(p0y - p1y) * Math.abs(p0x - p1x);
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = computeArea;
// @after-stub-for-debug-end

computeArea()
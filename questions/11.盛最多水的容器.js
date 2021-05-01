/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} array
 * @return {number}
 */
var maxArea = function(array) {
  function calcArea(idx1, idx2) {
    return Math.min(array[idx1], array[idx2]) * (idx2 - idx1);
  }
  let i = 0;
  let j = array.length - 1;
  let result = [i, j];
  let area = calcArea(i, j);
  while (j - i > 1) {
    // 偏移
    if (array[i] < array[j]) {
      i++;
    } else {
      j--;
    }
    if (calcArea(i, j) > area) {
      //
      result = [i, j];
      area = calcArea(i, j);
    }
  }
  return calcArea(result[0], result[1]);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxArea;
// @after-stub-for-debug-end
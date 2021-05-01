/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let result = 0;
  while (result < nums.length) {
    if (nums[result] === val) {
      nums.splice(result, 1);
    } else {
      result += 1;
    }
  }
  return result;
};
// @lc code=end


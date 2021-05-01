/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 * 解法1 朴素遍历 O(n^2)
 * ✨解法2 排序, 重复元素只会存在在相邻元素之间 O(n log2)
 * 🌟解法3 hash表。利用hash表的search和insert -> 平均复杂度为 O(1)，整体复杂度 O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // let isDuplicate = false;
  // for (let i = 0; i < nums.length - 1; i++) {
  //   if (nums.slice(i + 1).indexOf(nums[i]) !== -1) {
  //     isDuplicate = true;
  //     break;
  //   }
  // }
  // return isDuplicate;
  // 解法3
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      break;
    }
    set.add(nums[i]);
  }
  return set.size !== nums.length;
};
// @lc code=end


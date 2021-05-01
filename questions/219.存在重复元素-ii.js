/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.has(num) && i - map.get(num) <= k) {
      result = true;
      break;
    }
    map.set(num, i);
  }
  return result;
};

containsNearbyDuplicate([1,2,3,1,2,3], 2)

// @lc code=end

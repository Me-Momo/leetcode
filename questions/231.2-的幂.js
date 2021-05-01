/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * 解题思路
 * 满足2的幂，则
 * 1. n 二进制最高位为 1，其余所有位为 00；
 * 2. n - 1 二进制最高位为 0，其余所有位为 11；
 * - 位运算 AND 由和号（&）表示
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isPowerOfTwo;
// @after-stub-for-debug-end

/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 * 🐶 请受我一拜
 * ✨解法1 暴力粗糙 正则匹配0
 * ✨解法2 循环和位移动(任何数字跟掩码1进行逻辑与运算，都可以获得这个数字都最低位, 检查下一位时，将掩码左移一位)
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 转换为 二进制
  // return n.toString(2).replace(/0/g, '').length;
  // 解法2 使用掩码移动
  let count = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & mask) !== 0) {
      count += 1;
    }
    mask <<= 1;
  }
  return count;
};
// @lc code=end

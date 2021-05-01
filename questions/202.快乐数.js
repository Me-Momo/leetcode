/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function parse2array(num) {
    return `${num}`.split("").map((d) => Number(d));
  }
  const memo = new Map();
  let sum = n;
  while (!memo.has(sum)) {
    const newSum = parse2array(sum).reduce(
      (prev, next) => prev + next ** 2,
      0
    );
    if (newSum === 1) {
      sum = 1;
      break;
    }
    memo.set(sum, newSum);
    sum = newSum;
  }
  return sum === 1;
};
// @lc code=end

isHappy(19)
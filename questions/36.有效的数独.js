/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  function isSimpleValid(arrays) {
    let i = 0;
    while (i < arrays.length - 1) {
      if (arrays.slice(i + 1).indexOf(arrays[i]) !== -1) {
        return false;
      }
      i++;
    }
    return true;
  }

  // 处理行
  for (let i = 0; i < 9; i++) {
    const boardRow = board[i];
    if (!isSimpleValid(boardRow.filter(d => d !== '.'))) {
      // 直接 break
      return false;
    }
  }
  // 处理列
  for (let i = 0; i < 9; i++) {
    const boardCol = board.map(boardRow => boardRow[i]);
    if (!isSimpleValid(boardCol.filter(d => d !== '.'))) {
      // 直接 break
      return false;
    }
  }
  // 处理 以粗实线分隔的 3x3 宫
  for (let i = 0; i < 3; i++) {
    const arrs = [];
    arrs.push(board[i * 3]);
    arrs.push(board[i * 3 + 1]);
    arrs.push(board[i * 3 + 2]);
    for (let j = 0; j < 3; j++) {
      const subBoard = [];
      arrs.forEach(arr => subBoard.push(...arr.slice(j * 3, j * 3 + 3)));
      if (!isSimpleValid(subBoard.filter(d => d !== '.'))) {
        // 直接 break
        return false;
      }
    }
  }
  return true;
};
// @lc code=end


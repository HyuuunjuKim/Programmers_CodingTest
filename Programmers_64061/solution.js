function solution(board, moves) {
  var answer = 0;

  const turnBoard = [];
  const cart = [];
  for (let j = 0; j < board.length; j++) {
    var row = [];
    for (let i = board.length - 1; i >= 0; i--) {
      if (board[i][j] !== 0) {
        row.push(board[i][j]);
      }
    }
    turnBoard.push(row);
  }
  turnBoard.unshift([0]);

  moves.map((move) => {
    if (turnBoard[move].length > 0) {
      const tmp = turnBoard[move].pop();
      if (cart.length > 0) {
        // cart 배열 길이가 1이상이면 확인 필요
        if (cart[cart.length - 1] === tmp) {
          answer += 2;
          cart.pop();
        } else {
          cart.push(tmp);
        }
      } else {
        cart.push(tmp);
      }
    }
  });
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

function solution(m, n, board) {
  let answer = 0;
  let arr = [];
  for (let i in board) {
    const tmp = board[i].split("");
    arr.push(tmp);
  }
  let willBeRemoved = new Map();
  const canBeRemoved = (num_y, num_x) => {
    if (
      arr[num_y][num_x] === arr[num_y][num_x + 1] &&
      arr[num_y][num_x] === arr[num_y + 1][num_x] &&
      arr[num_y][num_x] === arr[num_y + 1][num_x + 1] &&
      arr[num_y][num_x] !== " " &&
      arr[num_y][num_x + 1] !== " " &&
      arr[num_y + 1][num_x] !== " " &&
      arr[num_y + 1][num_x + 1] !== " "
    ) {
      if (willBeRemoved.get(num_y)) {
        willBeRemoved.set(
          num_y,
          Array.from(
            new Set(
              Array.from(willBeRemoved.get(num_y)).concat([num_x, num_x + 1])
            )
          )
        );
      } else {
        willBeRemoved.set(num_y, [num_x, num_x + 1]);
      }
      if (willBeRemoved.get(num_y + 1)) {
        willBeRemoved.set(
          num_y + 1,
          Array.from(
            new Set(
              Array.from(willBeRemoved.get(num_y + 1)).concat([
                num_x,
                num_x + 1,
              ])
            )
          )
        );
      } else {
        willBeRemoved.set(num_y + 1, [num_x, num_x + 1]);
      }
    }
  };
  const remove = (map) => {
    for (let [key, value] of map) {
      //y, x
      //0부터 y-1까지 [x]를 y-1하기
      for (let num_y = key; num_y > 0; num_y--) {
        value.forEach((num_x) => {
          arr[num_y][num_x] = arr[num_y - 1][num_x];
        });
      }
      value.forEach((num_x) => {
        arr[0][num_x] = " ";
      });
    }
  };

  do {
    willBeRemoved.clear();
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr[0].length - 1; j++) {
        canBeRemoved(i, j);
        if (i === arr.length - 2 && j === arr[0].length - 2) {
          remove(willBeRemoved);
        }
      }
    }
  } while (willBeRemoved.size > 0);
  arr.forEach((line) => {
    answer += line.filter((item) => item === " ").length;
  });
  return answer;
}
solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);

function solution(array, commands) {
  var answer = [];
  commands.map((command) => {
    // 현재 command는 1차원 배열
    const filterArray = array.slice(command[0] - 1, command[1]);
    filterArray.sort(function (a, b) {
      return a - b;
    });
    answer.push(filterArray[command[2] - 1]);
    console.log(answer);
  });
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

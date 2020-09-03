function solution(n, computers) {
  let answer = 0;
  const passedPoint = [];
  const dfs = (i) => {
    console.log("---");
    passedPoint.push(i);
    for (const j in computers) {
      if (!passedPoint.includes(j) && computers[i][j] === 1) {
        console.log(j);
        dfs(j);
      }
    }
  };

  for (const i in computers) {
    if (!passedPoint.includes(i)) {
      dfs(i);
      answer++;
      console.log(passedPoint, answer);
    }
  }
  console.log(answer);
  return answer;
}
solution(12, [
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
]);

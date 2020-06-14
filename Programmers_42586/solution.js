function solution(progresses, speeds) {
  var answer = [];
  const remainder = [];
  progresses.forEach((item, index) => {
    remainder.push(Math.ceil((100 - item) / speeds[index]));
  });

  while (remainder.length > 0) {
    const tmp = remainder[0];
    let count = 0;
    for (let j = 0; j < remainder.length; j++) {
      if (remainder[j] <= tmp) {
        count++;
        if (j === remainder.length - 1) {
          answer.push(count);
          for (let k = 0; k < count; k++) {
            remainder.shift();
          }
          break;
        }
      } else {
        answer.push(count);
        for (let k = 0; k < count; k++) {
          remainder.shift();
        }
        break;
      }
    }
  }
  return answer;
}
solution([93, 30, 55, 80], [1, 30, 5, 5]);

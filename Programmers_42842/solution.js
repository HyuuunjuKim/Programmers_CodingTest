function solution(brown, yellow) {
  let answer = [];
  const tmp = [];
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0 && i >= yellow / i) {
      let arr = [i, yellow / i];
      tmp.push(arr);
    }
  }
  for (let j = 0; j < tmp.length; j++) {
    if ((tmp[j][0] + 2) * (tmp[j][1] + 2) === brown + yellow) {
      answer = [tmp[j][0] + 2, tmp[j][1] + 2];
    }
  }

  return answer;
}

solution(10, 2);

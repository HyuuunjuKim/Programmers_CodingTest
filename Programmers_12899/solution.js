function solution(n) {
  var answer = "";
  const tmp = [];
  while (n > 0) {
    if (n % 3 !== 0) {
      tmp.unshift(n % 3);
      n = Math.floor(n / 3);
    } else {
      tmp.unshift(4);
      n = n / 3 - 1;
    }
  }
  tmp.forEach((item) => {
    answer = answer.concat(item);
  });
  return answer;
}
solution(88);

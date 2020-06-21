function solution(N) {
  var answer = 0;
  const fibo = [2, 2];
  for (let i = 2; i < N; i++) {
    fibo.push(fibo[i - 2] + fibo[i - 1]);
  }
  fibo.forEach((item) => {
    answer += item;
  });
  answer += 2;
  console.log(answer);
  return answer;
}
solution(6);

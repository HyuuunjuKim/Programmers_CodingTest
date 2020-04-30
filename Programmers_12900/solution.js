function solution(n) {
  var answer = 0;
  const fibonacci = [];
  fibonacci.push(0);
  fibonacci.push(1);
  fibonacci.push(2);
  for (let i = 2; i < n; i++) {
    fibonacci.push(
      (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]) %
        1000000007
    );
  }
  answer = fibonacci[n];
  return answer;
}

solution(4);

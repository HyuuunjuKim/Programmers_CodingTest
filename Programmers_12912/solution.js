function solution(a, b) {
  var answer = 0;
  if (a <= b) {
    for (var i = a; i <= b; i++) {
      answer = answer + i;
      console.log(answer);
    }
  } else {
    for (var i = a; i >= b; i--) {
      answer = answer + i;
      console.log(answer);
    }
  }
  return answer;
}

solution(5, 3);

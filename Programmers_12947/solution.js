function solution(x) {
  var answer = true;
  let tmp = 0;
  const x_arr = String(x).split("");
  x_arr.forEach((item) => {
    tmp += item * 1;
  });
  if (x % tmp === 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

solution(10);

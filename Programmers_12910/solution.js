function solution(arr, divisor) {
  var answer = [];
  arr.map((element) => {
    if (element % divisor === 0) {
      answer.push(element);
    }
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  answer = answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}

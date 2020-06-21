function solution(arr) {
  var answer = 0;
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });

  answer = sum / arr.length;
  return answer;
}

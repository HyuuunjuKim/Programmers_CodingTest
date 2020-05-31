function solution(arr) {
  var answer = [];
  answer = arr.filter((value, index) => value != arr[index - 1]);
  return answer;
}

solution([4, 4, 4, 3, 3]);

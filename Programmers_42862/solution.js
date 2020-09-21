function solution(n, lost, reserve) {
  var answer = 0;
  let arr = [-2];
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
  lost.forEach((item) => {
    arr[item] -= 1;
  });
  reserve.forEach((item) => {
    arr[item] += 1;
  });
  arr.forEach((std, idx) => {
    if (std === -1) {
      if (arr[idx + 1] === 1) {
        arr[idx] += 1;
        arr[idx + 1] -= 1;
      } else if (arr[idx - 1]) {
        arr[idx] += 1;
        arr[idx - 1] -= 1;
      }
    }
  });
  arr.forEach((item) => {
    if (item >= 0) answer++;
  });
  console.log(arr, answer);
  return answer;
}
solution(5, [2, 4], [3]);

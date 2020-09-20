function solution(n, times) {
  times.sort((a, b) => {
    return a - b;
  });
  let left = 1;
  let right = times[times.length - 1] * n;
  let answer = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    times.forEach((item) => {
      count += Math.floor(mid / item);
      if (count >= n) answer = Math.min(mid, answer);
    });

    if (count >= n) {
      // mid를 더 줄여도 됨
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(answer);
  return answer;
}
// function solution(n, times) {
//   times.sort((a, b) => {
//     return a - b;
//   });
//   let left = 1;
//   let right = n * times[times.length - 1];
//   let answer = right;

//   while (left <= right) {
//     let mid = parseInt((left + right) / 2);
//     let cnt = 0;
//     times.forEach((value) => {
//       cnt += parseInt(mid / value);
//       if (cnt >= n) {
//         answer = Math.min(answer, mid);
//       }
//     });
//     if (cnt >= n) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   console.log(answer);
//   return answer;
// }
solution(6, [7, 10]);

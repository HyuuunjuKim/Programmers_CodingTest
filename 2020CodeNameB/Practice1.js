function solution(len, k, arr) {
  let answer = 0;
  // 처음에 최소값이 제일 첫번쨰로 k개를 지우고
  //  그 다음에 양옆믕로 k-1개씩 지우기

  //최솟값을 k개 중 젤 첫번째부터 마지막까지 해서count
  let ans_arr = [];
  const min = Math.min.apply(null, arr);
  const idx_min = arr.indexOf(min);

  for (let i = idx_min; i > idx_min - k; i--) {
    // idx_min부터 k번
    console.log(i, k);
    let count = 0;
    if ((len - i - k) % (k - 1) != 0) {
      count = Math.floor((len - i - k) / (k - 1)) + 1;
    } else {
      count = Math.floor((len - i - k) / (k - 1));
    }

    console.log(count);

    if (i % (k - 1) != 0) {
      count += Math.floor(i / (k - 1)) + 1;
    } else {
      count += Math.floor(i / (k - 1));
    }
    ans_arr.push(count + 1);
  }
  answer = Math.min.apply(null, ans_arr);
  return answer;
}

solution(8, 3, [7, 3, 1, 8, 4, 6, 2, 5]);

function solution(s) {
  let answer = 0;
  let ans = [];

  // let split_len = 2; //자르는 길이
  for (let split_len = 1; split_len <= Math.floor(s.length / 2); split_len++) {
    let s_arr = [];
    for (let i = 0; i < Math.ceil(s.length / split_len); i++) {
      s_arr.push(s.substr(split_len * i, split_len));
    }
    let count = 1;
    let idx = 0;

    while (idx < s_arr.length) {
      if (s_arr[idx] === s_arr[idx + 1]) {
        count++;
        s_arr.splice(idx + 1, 1);
      } else {
        if (count !== 1) {
          s_arr[idx] = (count + "").concat(s_arr[idx]);
        }
        idx++;
        count = 1;
      }
    }

    ans.push(s_arr.join("").length);
  }
  answer = Math.min.apply(null, ans);
  if (s.length === 1) {
    answer = 1;
  }
  return answer;
}
solution("a");

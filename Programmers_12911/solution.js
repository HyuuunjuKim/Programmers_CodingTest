function solution(n) {
  const countOne = (dec) => {
    const tmp = [];
    let count = 0;
    if (dec === 0) {
      for (let i = 0; i < n; i++) {
        tmp.push(0);
      }
    } else {
      while (dec > 1) {
        tmp.unshift(dec % 2);
        dec = Math.floor(dec / 2);
      }
      tmp.unshift(1);
    }
    tmp.map((item) => {
      if (item === 1) {
        count++;
      }
    });
    return count;
  };
  const tmp = countOne(n);
  var answer = 0;
  for (let i = n + 1; i <= 1000000; i++) {
    if (tmp === countOne(i)) {
      answer = i;
      break;
    }
  }
  return answer;
}
solution(15);

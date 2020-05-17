function solution(n, words) {
  var answer = [];
  let tmp = [];
  for (let i = 1; i < words.length; i++) {
    const before = words[i - 1].substr(words[i - 1].length - 1, 1);
    const current = words[i].substr(0, 1);
    const idx = words.indexOf(words[i]);
    if (before !== current || idx !== i) {
      tmp.push(words[i]);
      tmp.push(i);
      break;
    }
  }
  if (tmp.length === 0) {
    answer = [0, 0];
  } else {
    if ((tmp[1] + 1) % n !== 0) {
      answer = [(tmp[1] + 1) % n, Math.ceil((tmp[1] + 1) / n)];
    } else {
      answer = [n, Math.ceil((tmp[1] + 1) / n)];
    }
  }
  return answer;
}
solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);

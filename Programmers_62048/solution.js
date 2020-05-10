function solution(w, h) {
  var answer = 0;
  for (let i = 0; i < w; i++) {
    answer = answer + Math.floor((h * i) / w);
  }
  answer = answer * 2;
  return answer;
}
solution(8, 12);

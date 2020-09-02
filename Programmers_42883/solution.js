function solution(number, k) {
  let answer = "";
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    if (i === 0) {
      // 처음엔 무조건 push
      stack.push(number.charAt(i) * 1);
      continue;
    }
    if (stack[stack.length - 1] >= number.charAt(i) * 1) {
      stack.push(number.charAt(i) * 1);
    } else {
      //자기보다 큰 거 만날때까지 빼야함
      while (stack[stack.length - 1] < number.charAt(i) * 1) {
        stack.pop();
        k--;
        if (k === 0) {
          break;
        }
      }
      stack.push(number.charAt(i) * 1);
    }
    if (k === 0) {
      //stack 그대로 출력 + (i+1)부터 끝까지 그대로 출력
      const tmp = stack.join("");
      const tmp2 = number.slice(i + 1, number.length);
      answer = tmp.concat(tmp2);
    }
  }
  // number 순회가 끝났지만 k가 0보다 큰경우
  if (k > 0) {
    answer = stack.join("").substring(0, stack.length - k);
  }
  return answer;
}

solution("1231234", 3);

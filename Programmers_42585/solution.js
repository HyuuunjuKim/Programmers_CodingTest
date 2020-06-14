function solution(arrangement) {
  var answer = 0;
  const arg_arr = arrangement.split("");
  for (let i = 0; i < arg_arr.length; i++) {
    if (arg_arr[i] === "(" && arg_arr[i + 1] === ")") {
      arg_arr[i] = "()";
      arg_arr.splice(i + 1, 1);
    }
  }
  const stack = [];
  while (arg_arr.length > 0) {
    const tmp = arg_arr.shift();

    if (tmp === "(") {
      stack.push(tmp);
    } else if (tmp === "()") {
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
  }

  return answer;
}
solution("()(((()())(())()))(())");

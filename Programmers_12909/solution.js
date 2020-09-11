function solution(s) {
  let arr = s.split("");
  if (arr[0] === ")") return false;
  if (arr.length % 2 !== 0) return false;
  let stack = [];
  for (let i = 1; i < s.length; i++) {
    if (arr[i] === "(") stack.push("(");
    else stack.pop();
    if (i == s.length - 1 && stack.length !== 0) return false;
  }
  return true;
  console.log(arr);
}
solution("()()");

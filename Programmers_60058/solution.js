function solution(p) {
  var answer = "";
  const step_1 = (input) => {
    if (input.length === 0) {
      return " ";
    } else return step_2(input);
  };
  const step_2 = (input) => {
    const arr = input.split("");
    let u = [arr[0]];
    let v = [];
    let sum = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[0] === arr[i]) sum++;
      else sum--;

      if (sum === 0) {
        u = u.concat(arr.slice(1, i + 1));
        v = arr.slice(i + 1, arr.length);
        break;
      }
    }
    return step_3(u, v);
  };

  const step_3 = (u, v) => {
    let stack = [];
    let tmp = [];
    if (u[0] === "(") stack.push("(");
    else {
      tmp = step_4(u, v);
      return tmp;
    } //올바르지 않은 문자열 step4로 이동
    //올바른지 마저 체크
    for (let i = 1; i < u.length; i++) {
      if (u[i] === "(") stack.push("(");
      else stack.pop();

      if (i !== u.length - 1 && stack.length === 0) {
        //올바르지 않음
        tmp = step_4(u, v);
        return tmp;
      } else if (i === u.length - 1 && stack.length === 0) {
        //올바름
        tmp = u.concat(step_1(v.join("")));
        return tmp;
      }
    }
    // console.log("tmp", tmp);
  };
  const step_4 = (u, v) => {
    let tmp = [];
    tmp.push("("); //4-1
    const new_v = step_1(v.join(""));
    tmp = tmp.concat(new_v);
    tmp.push(")");
    let removed_u = [];
    for (let i = 1; i < u.length - 1; i++) {
      removed_u.push(u[i]);
    }
    removed_u.forEach((item) => {
      if (item === "(") tmp.push(")");
      else tmp.push("(");
    });
    return tmp;
  };
  let ans = step_1(p);
  ans = ans.filter((item) => item !== " ");
  answer = ans.join("");
  return answer;
}

solution("(()())()");

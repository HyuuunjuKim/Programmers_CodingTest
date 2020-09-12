function solution(new_id) {
  let answer = "";
  const step_1 = (str) => {
    console.log("step1가 받은", str);
    return str.toLowerCase();
  };
  const step_2 = (str) => {
    console.log("step2가 받은", str);
    const tmp = str.replace(/[^0-9a-z.\-_]/gi, "");
    // console.log(tmp);
    return tmp;
  };
  const step_3 = (str) => {
    console.log("step3가 받은", str);
    const arr = str.split("");

    const idx = [];
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ".") stack.push(i);
      if (stack.length !== 0 && arr[i] !== ".") {
        idx.push(stack);
        stack = [];
      }
      if (i === arr.length - 1) idx.push(stack);
      console.log(stack);
    }
    console.log(idx);
    for (let i = idx.length - 1; i >= 0; i--) {
      if (idx[i].length > 1) {
        arr.splice(idx[i][1], idx[i].length - 1);
      }
    }

    console.log(arr);
    return arr.join("");
  };
  const step_4 = (str) => {
    console.log("step4가 받은", str);
    if (str.substr(str.length - 1, 1) === ".")
      str = str.substring(0, str.length - 1);
    if (str.substr(0, 1) === ".") str = str.substring(1, str.length);
    return str;
  };
  const step_5 = (str) => {
    console.log("step5가 받은", str);
    if (str.length === 0) return "a";
    return str;
  };
  const step_6 = (str) => {
    console.log("step6가 받은", str);
    if (str.length >= 16) {
      str = str.substr(0, 15);
      if (str.substr(14, 1) === ".") {
        str = str.substr(0, 14);
      }
    }
    return str;
  };
  const step_7 = (str) => {
    console.log("step7가 받은", str);
    let last_str = str.substr(str.length - 1, 1);
    if (str.length <= 2) {
      while (str.length < 3) {
        str = str.concat(last_str);
      }
    }
    return str;
  };
  answer = step_7(step_6(step_5(step_4(step_3(step_2(step_1(new_id)))))));
  console.log(answer);
  return answer;
}
solution("=.=");

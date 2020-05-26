function solution(dartResult) {
  const substr_push = (num) => {
    const tmp = dartResult.substr(0, num);
    dartResult = dartResult.substr(num);
    operand.push(tmp);
  };
  const changeToNum = (str) => {
    if (str.charAt(str.length - 1) === "S") {
      return Math.pow(str.substr(0, str.length - 1) * 1, 1);
    } else if (str.charAt(str.length - 1) === "D") {
      return Math.pow(str.substr(0, str.length - 1) * 1, 2);
    } else {
      return Math.pow(str.substr(0, str.length - 1) * 1, 3);
    }
  };
  var answer = 0;
  let operand = []; // 피연산자
  let operator = []; // 연산자
  while (dartResult.length > 0) {
    if (dartResult.charAt(0) * 1 >= 0 && dartResult.charAt(0) * 1 <= 9) {
      operator.push("+");
      if (dartResult.charAt(0) * 1 == 1) {
        if (dartResult.charAt(1) * 1 === 0) {
          substr_push(3);
        } else {
          substr_push(2);
        }
      } else {
        substr_push(2);
      }
    } else {
      const tmp = dartResult.substr(0, 1);
      dartResult = dartResult.substr(1);
      operator.push(tmp);
      if (dartResult.charAt(0) * 1 == 1) {
        if (dartResult.charAt(1) * 1 === 0) {
          substr_push(3);
        } else {
          substr_push(2);
        }
      } else {
        substr_push(2);
      }
    }
  }
  operator.shift();
  const tmp_answer = [];
  let tmp2 = 0;
  while (operand.length > 0) {
    tmp2 = tmp2 + changeToNum(operand.shift());
    const shiftedOper = operator.shift();
    if (shiftedOper === "#") {
      tmp_answer.push(tmp2 * -1);
    } else if (shiftedOper === "*") {
      const beforeNum = tmp_answer.pop();
      if (beforeNum === undefined) {
        tmp_answer.push(tmp2 * 2);
      } else {
        tmp_answer.push(beforeNum * 2);
        tmp_answer.push(tmp2 * 2);
      }
    } else {
      tmp_answer.push(tmp2);
    }
    tmp2 = 0;
  }
  tmp_answer.map((item) => {
    answer = answer + item;
  });
  console.log(answer);
  console.log(tmp_answer);
  console.log(operator);
  console.log(operand);

  return answer;
}

solution("1T2D3D#");

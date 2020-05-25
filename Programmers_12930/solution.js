function solution(s) {
  var answer = "";
  const split_s = s.split(" ");
  split_s.map((element, index) => {
    const tmp = element.split("");
    let tmp2 = "";
    tmp.map((char, index) => {
      if (index % 2 === 0) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      tmp2 = tmp2.concat(char);
    });
    answer = answer.concat(tmp2);
    if (index !== split_s.length - 1) {
      answer = answer.concat(" ");
    }
    tmp2 = "";
  });
  return answer;
}

solution("try hello world");

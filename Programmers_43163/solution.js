function solution(begin, target, words) {
  let answer = 0;
  let route = [];
  let height = 0;

  const possibleChange = (str) => {
    route.push(str);
    height++;

    const arr = str.split(""); // 'h', 'i', 't'
    const target_arr = target.split("");

    let check = 0;
    for (const i in arr) {
      if (arr[i] !== target_arr[i]) check++;
    }
    if (check !== 1) {
      words.forEach((word) => {
        const tmp = word.split("");
        let check = 0;
        for (const i in tmp) {
          if (tmp[i] !== arr[i]) check++;
        }
        if (check === 1 && !route.includes(word)) {
          possibleChange(word);
        }
      });
    }

    if (answer === 0) {
      answer = height;
    } else {
      height < answer ? (answer = height) : "";
    }
  };
  if (words.includes(target)) {
    possibleChange(begin);
  }
  console.log(answer);
  return answer;
}
solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);

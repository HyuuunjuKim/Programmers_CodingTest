function solution(answers) {
  var answer = [];

  const giveUpPeople = [
    [1, 2, 3, 4, 5], // 5
    [2, 1, 2, 3, 2, 4, 2, 5], // 8
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 10
  ];
  const answersArr = [];
  giveUpPeople.map((arr) => {
    let tmp = [];
    for (let i = 0; i < Math.floor(answers.length / arr.length); i++) {
      tmp = tmp.concat(arr);
    }
    const tmp2 = arr.slice(0, answers.length % arr.length);
    tmp = tmp.concat(tmp2);
    answersArr.push(tmp);
  });
  const countArr = [];
  answersArr.forEach((answer) => {
    let count = 0;
    answer.forEach((item, index) => {
      if (item === answers[index]) {
        count++;
      }
    });
    countArr.push(count);
  });
  countArr.forEach((count, index) => {
    const max = Math.max.apply(null, countArr);
    if (max === count) {
      answer.push(index + 1);
    }
  });
  return answer;
}

solution([1, 3, 2, 4, 2]);

function solution(heights) {
  var answer = [];
  answer.push(0);

  heights.forEach((top, index) => {
    if (index !== 0) {
      for (let i = index - 1; i >= 0; i--) {
        if (heights[i] > top) {
          answer.push(i + 1);
          break;
        }
        if (i === 0) {
          answer.push(0);
        }
      }
    }
  });
  return answer;
}

solution([6, 9, 5, 7, 4]);

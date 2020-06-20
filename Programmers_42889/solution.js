function solution(N, stages) {
  function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let cur = array[i];
      let left = i - 1;
      while (left >= 0 && array[left][1] * cur[2] < cur[1] * array[left][2]) {
        array[left + 1] = array[left];
        array[left] = cur;
        cur = array[left];
        left--;
      }
    }
    return array;
  }

  var answer = [];
  let fail = [];
  for (let i = 1; i <= N; i++) {
    let current_stage_count = 0;
    let over_stage_count = 0;
    stages.forEach((item) => {
      if (i === item) {
        current_stage_count++;
      }
      if (i <= item) {
        over_stage_count++;
      }
    });
    if (over_stage_count === 0) {
      fail.push([i, 0, 0]);
    } else {
      fail.push([i, current_stage_count, over_stage_count]);
    }
  }
  fail = insertionSort(fail);
  fail.forEach((item) => {
    answer.push(item[0]);
  });

  return answer;
}

solution(5, [2, 1, 2, 4, 2, 4, 3, 3]);

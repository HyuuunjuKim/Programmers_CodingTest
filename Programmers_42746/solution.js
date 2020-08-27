function solution(numbers) {
  let answer = "";
  let sum = 0;
  numbers.forEach((item) => {
    sum += item;
  });
  if (sum === 0) {
    answer = 0 + "";
  } else {
    numbers.sort((a, b) => {
      let str_a = a + "";
      let str_b = b + "";

      if (str_a + str_b > str_b + str_a) {
        return -1;
      } else if (str_a + str_b < str_b + str_a) {
        return 1;
      } else {
        return 0;
      }
    });

    numbers.forEach((item) => {
      answer += item + "";
    });
  }
  return answer;
}
solution([3, 30, 34, 5, 9, 8800, 82]);

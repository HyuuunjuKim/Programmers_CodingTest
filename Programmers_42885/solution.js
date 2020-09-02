function solution(people, limit) {
  let answer = 0;

  people.sort((a, b) => {
    return b - a;
  });
  let left = 0;
  let right = people.length - 1;
  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
      answer++;
    } else {
      left++;
      answer++;
    }
  }
  if (left === right) {
    answer++;
  }

  return answer;
}
solution([10, 20, 30, 40, 50, 60, 70, 80, 90], 100);

function solution(priorities, location) {
  var answer = 0;
  const priorities_boolean = [];
  for (let i = 0; i < priorities.length; i++) {
    if (i === location) {
      priorities_boolean.push(true);
    } else {
      priorities_boolean.push(false);
    }
  }
  const printList = [];
  const boolList = [];
  while (priorities.length > 0) {
    const shift_item = priorities.shift();
    const shift_boolean = priorities_boolean.shift();
    if (priorities.length === 0) {
      printList.push(shift_item);
      boolList.push(shift_boolean);
      break;
    }
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] > shift_item) {
        priorities.push(shift_item);
        priorities_boolean.push(shift_boolean);
        break;
      }
      if (i === priorities.length - 1) {
        printList.push(shift_item);
        boolList.push(shift_boolean);
      }
    }
  }

  answer = boolList.indexOf(true) + 1;

  return answer;
}

solution([1, 1, 9, 1, 1, 1], 0);

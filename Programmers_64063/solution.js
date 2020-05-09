function solution(k, room_number) {
  var answer = [];
  let kArr = []; //
  for (let i = 0; i < k; i++) {
    kArr.push(false);
  }
  room_number.forEach((wantRoom, index) => {
    if (kArr[wantRoom - 1] === false) {
      answer.push(wantRoom);
      kArr[wantRoom - 1] = true;
    } else {
      for (let i = wantRoom; i < k; i++) {
        if (kArr[i] === false) {
          answer.push(i + 1);
          kArr[i] = true;
          break;
        }
      }
    }
  });
  return answer;
}

solution(10, [1, 3, 4, 1, 3, 1]);

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  const bridge = [];
  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  const shift_item = truck_weights.shift();
  bridge[bridge_length - 1] = shift_item;

  let sum = shift_item;

  while (sum > 0) {
    sum -= bridge[0];
    for (let i = 1; i < bridge_length; i++) {
      bridge[i - 1] = bridge[i];
    }
    bridge[bridge_length - 1] = 0;

    const shift_item = truck_weights.shift();
    if (shift_item !== undefined) {
      if (sum + shift_item <= weight) {
        bridge[bridge_length - 1] = shift_item;
        sum += shift_item;
      } else {
        truck_weights.unshift(shift_item);
      }
      answer++;
    } else {
      sum = 0;
    }
  }
  answer += bridge_length + 1;
  return answer;
}

solution(100, 100, [10]);

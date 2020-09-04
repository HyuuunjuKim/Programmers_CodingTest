function solution(gems) {
  let answer = [];
  let size = new Set(gems).size;
  let gemMap = new Map();
  let gemArr = [];
  gems.forEach((gem, idx) => {
    gemMap.delete(gem);
    gemMap.set(gem, idx);

    if (gemMap.size === size) {
      // const values = [];
      // for (let map of gemMap) {
      //   values.push(map[1]);
      // }
      // gemArr.push([values[0], values[values.length - 1]]);
      gemArr.push([gemMap.values().next().value + 1, idx + 1]);
    }
  });
  console.log(gemArr);
  gemArr.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[1] - b[1];
    }
    return a[1] - a[0] - (b[1] - b[0]);
  });
  answer = gemArr[0];
  return answer;
}
solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]);

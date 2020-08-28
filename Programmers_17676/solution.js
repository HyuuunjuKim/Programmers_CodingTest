function solution(lines) {
  let answer = 0;
  let durations = [];
  let pointArr = [];
  lines.forEach((line) => {
    line = line.split(" ");
    let tmp = line[1].split(":");
    tmp = tmp.map((item) => {
      return item * 1;
    });
    const tmp2 = line[2].substring(0, line[2].length - 1);
    let start = tmp[0] * 3600 + tmp[1] * 60 + tmp[2] - tmp2 * 1 + 0.001;
    start = start.toFixed(3) * 1;
    let end = tmp[0] * 3600 + tmp[1] * 60 + tmp[2];
    if (end > 3600 * 23 + 60 * 59 + 59.999) {
      end = 3600 * 23 + 60 * 59 + 59.999;
    }
    pointArr.push(start * 1000);
    pointArr.push(end * 1000);
    durations.push([start * 1000, end * 1000]);
  });
  //기준 시간 1초의 시작이 durations의 [1]보다 작거나
  //1초의 끝이 durations의 [0]보다 크면 answer++
  pointArr.sort((a, b) => {
    return a - b;
  });
  let ans = [];
  pointArr.forEach((log) => {
    let startPoint = log;
    let endPoint = log + 999;
    let count = 0;
    durations.forEach((dur, idx) => {
      if (dur[1] < startPoint || dur[0] > endPoint) {
      } else {
        count++;
      }
      if (idx === durations.length - 1) {
        ans.push(count);
        count = 0;
      }
    });
  });

  answer = Math.max.apply(null, ans);
  console.log(answer);
  return answer;
}

solution(["2016-09-15 23:59:59.999 0.001s"]);

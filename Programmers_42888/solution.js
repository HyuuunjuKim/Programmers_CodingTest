function solution(record) {
  var answer = [];
  const arr = new Map();
  record.map((row) => {
    if (row.split(" ")[0] !== "Leave") {
      arr.set(row.split(" ")[1], row.split(" ")[2]);
    }
  });
  console.log(arr);

  record.forEach((line) => {
    if (line.indexOf("Enter") !== -1) {
      answer.push(`${arr.get(line.split(" ")[1])}님이 들어왔습니다.`);
    }
    if (line.indexOf("Leave") !== -1)
      answer.push(`${arr.get(line.split(" ")[1])}님이 나갔습니다.`);
  });
  console.log(answer);
  return answer;
}
solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);

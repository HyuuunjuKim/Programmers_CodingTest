function solution(s) {
  var answer = [];
  let sArray = s.split("},{");
  sArray[0] = sArray[0].substring(2);
  sArray[sArray.length - 1] = sArray[sArray.length - 1].substring(
    0,
    sArray[sArray.length - 1].length - 2
  );
  const sArray2 = [];

  sArray.map((arr) => {
    sArray2.push(arr.split(","));
  });
  for (let i = 0; i < sArray2.length; i++) {
    let tmp = 0;
    sArray2.map((row) => {
      if (row.length === 1) {
        answer.push(row[0] * 1);
        tmp = row[0];
      }
    });
    sArray2.map((row) => {
      row.map((findTmp, index) => {
        if (findTmp === tmp) {
          row.splice(index, 1);
        }
      });
    });
  }
  return answer;
}

solution("{{123}}");
